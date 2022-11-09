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

import cats.effect.IO
import cats.effect.concurrent.Deferred
import cats.effect.ContextShift
import cats.effect.Timer
import cats.effect.Concurrent

private[compliancetests] class CompatEffect[F[_]](implicit
    val F: Concurrent[F]
) {
  def deferred[A]: F[Deferred[F, A]] = Deferred[F, A]

  val utf8Encode: fs2.Pipe[F, String, Byte] = fs2.text.utf8Encode[F]
  val utf8Decode: fs2.Pipe[F, Byte, String] = fs2.text.utf8Decode[F]
}

object Compat {
  def host(hostname: String): String = hostname
  def port(portNumber: Int): Int = portNumber
}

object CompatEffect {
  implicit def ce(implicit
      cs: ContextShift[IO],
      timer: Timer[IO]
  ): CompatEffect[IO] = new CompatEffect[IO]
}
