/*
 *  Copyright 2021-2022 Disney Streaming
 *
 *  Licensed under the Tomorrow Open Source Technology License, Version 1.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     https://disneystreaming.github.io/TOST-1.0.txt
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package smithy4s.compliancetests

import java.nio.charset.StandardCharsets

import cats.effect.IO
import cats.effect.Resource
import cats.implicits._
import org.http4s._
import org.http4s.headers.`Content-Type`
import smithy.test._
import smithy4s.Document
import smithy4s.Endpoint
import smithy4s.http.CodecAPI
import smithy4s.Service
import smithy4s.ShapeTag

import scala.concurrent.duration._
import smithy4s.Transformation
import smithy4s.ShapeId
import smithy4s.Hints

abstract class ServerHttpComplianceTestCase[
    P,
    Alg[_[_, _, _, _, _]],
    Op[_, _, _, _, _]
](
    protocol: P
)(implicit
    originalService: Service[Alg, Op],
    ce: CompatEffect,
    protocolTag: ShapeTag[P]
) {
  import ce._
  import org.http4s.implicits._
  private val baseUri = uri"http://localhost/"

  def getServer(impl: smithy4s.Monadic[Alg, IO]): Resource[IO, HttpRoutes[IO]]
  def codecs: CodecAPI

  private def makeRequest(
      baseUri: Uri,
      testCase: HttpRequestTestCase
  ): Request[IO] = {
    val expectedHeaders =
      List(
        testCase.headers.map(h =>
          Headers(h.toList.map(a => a: Header.ToRaw): _*)
        ),
        testCase.bodyMediaType.map(mt =>
          Headers(`Content-Type`(MediaType.unsafeParse(mt)))
        )
      ).foldMap(_.combineAll)

    val expectedMethod = Method
      .fromString(testCase.method)
      .getOrElse(sys.error("Invalid method"))

    val expectedUri = baseUri
      .withPath(
        Uri.Path.unsafeFromString(testCase.uri).addEndsWithSlash
      )
      .withQueryParams(
        testCase.queryParams.combineAll.map {
          _.split("=", 2) match {
            case Array(k, v) =>
              (
                k,
                Uri.decode(
                  toDecode = v,
                  charset = StandardCharsets.UTF_8,
                  plusIsSpace = true
                )
              )
          }
        }.toMap
      )

    val body =
      testCase.body
        .map(b => fs2.Stream.emit(b).through(ce.utf8Encode))
        .getOrElse(fs2.Stream.empty)

    Request[IO](
      method = expectedMethod,
      uri = expectedUri,
      headers = expectedHeaders,
      body = body
    )
  }

  private[compliancetests] def serverRequestTest[I, E, O, SE, SO](
      endpoint: Endpoint[Op, I, E, O, SE, SO],
      testCase: HttpRequestTestCase
  ): ComplianceTest[IO] = {
    type R[I_, E_, O_, SE_, SO_] = IO[O_]

    val inputFromDocument = Document.Decoder.fromSchema(endpoint.input)
    ComplianceTest[IO](
      name = endpoint.id.toString + "(server|request): " + testCase.id,
      run = {
        deferred[I].flatMap { inputDeferred =>
          val fakeImpl: smithy4s.Monadic[Alg, IO] =
            originalService.transform[R](
              new smithy4s.Interpreter[Op, IO] {
                def apply[I_, E_, O_, SE_, SO_](
                    op: Op[I_, E_, O_, SE_, SO_]
                ): IO[O_] = {
                  val (in, endpointInternal) = originalService.endpoint(op)

                  if (endpointInternal.id == endpoint.id)
                    inputDeferred.complete(in.asInstanceOf[I]) *>
                      IO.raiseError(new NotImplementedError)
                  else IO.raiseError(new Throwable("Wrong endpoint called"))
                }
              }
            )

          getServer(fakeImpl)
            .use { server =>
              server.orNotFound
                .run(makeRequest(baseUri, testCase))
                .attemptNarrow[NotImplementedError] *>
                inputDeferred.get.timeout(1.second).flatMap { foundInput =>
                  inputFromDocument
                    .decode(testCase.params.getOrElse(Document.obj()))
                    .liftTo[IO]
                    .map { decodedInput =>
                      assert.eql(foundInput, decodedInput)
                    }
                }
            }
        }
      }
    )
  }

  private[compliancetests] def serverResponseTest[I, E, O, SE, SO](
      endpoint: Endpoint[Op, I, E, O, SE, SO],
      testCase: HttpResponseTestCase
  ): ComplianceTest[IO] = {

    type R[I_, E_, O_, SE_, SO_] = IO[O_]

    ComplianceTest[IO](
      name = endpoint.id.toString + "(server|response): " + testCase.id,
      run = {
        val outputDecoder = Document.Decoder.fromSchema(endpoint.output)
        val output = outputDecoder
          .decode(testCase.params.getOrElse(Document.obj()))
          .liftTo[IO]

        val prepared = prepareService(endpoint)

        output.tupleRight(prepared).flatMap {
          case (output, (ammendedService, syntheticRequest)) =>
            val fakeImpl: smithy4s.Monadic[Alg, IO] =
              ammendedService.transform[R] {
                new smithy4s.Interpreter[NoInputOp, IO] {
                  def apply[I_, E_, O_, SE_, SO_](
                      op: NoInputOp[I_, E_, O_, SE_, SO_]
                  ): IO[O_] = {
                    // todo error structures
                    IO.pure(output.asInstanceOf[O_])
                  }
                }
              }

            getServer(fakeImpl)
              .use { server =>
                server.orNotFound
                  .run(syntheticRequest)
                  .flatMap { resp =>
                    resp.body
                      .through(utf8Decode)
                      .compile
                      .foldMonoid
                      .tupleRight(resp.status)
                  }
                  .map { case (actualBody, status) =>
                    val bodyAssert = testCase.body
                      .map(body => assert.eql(body, actualBody))
                    val assertions =
                      bodyAssert.toList :+
                        assert.eql(status.code, testCase.code)
                    assertions.combineAll
                  }
              }
        }
      }
    )
  }

  private case class NoInputOp[I_, E_, O_, SE_, SO_]()
  private def prepareService[I, E, O, SE, SO](
      endpoint: Endpoint[Op, I, E, O, SE, SO]
  ): (Service[Alg, NoInputOp], Request[IO]) = {
    val amendedEndpoint =
        // format: off
        new Endpoint[NoInputOp, Unit, Nothing, O, Nothing, Nothing] {
          def hints: smithy4s.Hints = {
            val newHttp = smithy.api.Http(
              method = smithy.api.NonEmptyString("GET"),
              uri = smithy.api.NonEmptyString("/")
            )
            val code = endpoint.hints.get[smithy.api.Http].map(_.code).getOrElse(newHttp.code)
            Hints(newHttp.copy(code = code))
          }
          def id: smithy4s.ShapeId = ShapeId("custom", "endpoint")
          def input: smithy4s.Schema[Unit] = smithy4s.Schema.unit
          def output: smithy4s.Schema[O] = endpoint.output
          def streamedInput: smithy4s.StreamingSchema[Nothing] =
            smithy4s.StreamingSchema.NoStream
          def streamedOutput: smithy4s.StreamingSchema[Nothing] =
            smithy4s.StreamingSchema.NoStream
          def wrap(input: Unit): NoInputOp[Unit, Nothing, O, Nothing, Nothing] =
            NoInputOp()
        }
        // format: on
    val request = Request[IO](Method.GET, Uri.unsafeFromString("/"))
    val amendedService =
      // format: off
      new Service[Alg, NoInputOp]() {
        override def transform[F[_, _, _, _, _], G[_, _, _, _, _]](
            alg: Alg[F],
            transformation: Transformation[F, G]
        ): Alg[G] = originalService.transform(alg, transformation)
        override def id: ShapeId = ShapeId("custom", "service")
        override def endpoints: List[Endpoint[NoInputOp, _, _, _, _, _]] = List(amendedEndpoint)
        override def endpoint[I_, E_, O_, SI_, SO_](op: NoInputOp[I_, E_, O_, SI_, SO_]): (I_, Endpoint[NoInputOp, I_, E_, O_, SI_, SO_]) = ???
        override def version: String = originalService.version
        override def hints: Hints = originalService.hints

        override def transform[P2[_, _, _, _, _]](transformation: Transformation[NoInputOp, P2]): Alg[P2] = {
          val newT = new Transformation[Op, P2] {
            def apply[I_, E_, O_, SE_, SO_](fa: Op[I_, E_, O_, SE_, SO_]): P2[I_, E_, O_, SE_, SO_] =
              transformation.apply(NoInputOp[I_, E_, O_, SE_, SO_]())
          }
          originalService.transform(newT)
        }
        override def asTransformation[P2[_, _, _, _, _]](impl: Alg[P2]): Transformation[NoInputOp, P2] =
          ???
      }
      // format: on
    (amendedService, request)
  }

  def allServerTests(): List[ComplianceTest[IO]] = {
    originalService.endpoints.flatMap { case endpoint =>
      val requestsTests = endpoint.hints
        .get(HttpRequestTests)
        .map(_.value)
        .getOrElse(Nil)
        .filter(_.protocol == protocolTag.id.toString())
        .filter(tc => tc.appliesTo.forall(_ == AppliesTo.SERVER))
        .map(tc => serverRequestTest(endpoint, tc))

      val opResponseTests = endpoint.hints
        .get(HttpResponseTests)
        .map(_.value)
        .getOrElse(Nil)
        .filter(_.protocol == protocolTag.id.toString())
        .filter(tc => tc.appliesTo.forall(_ == AppliesTo.SERVER))
        .map(tc => serverResponseTest(endpoint, tc))

      requestsTests ++ opResponseTests
    }
  }
}
