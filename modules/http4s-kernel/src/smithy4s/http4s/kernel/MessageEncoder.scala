package smithy4s.http4s.kernel

import smithy4s.schema.CachedSchemaCompiler
import smithy4s.schema.Schema
import smithy4s.http.HttpRestSchema
import smithy4s.capability.Encoder
import smithy4s.PartialData

private[kernel] object MessageEncoder {

  /**
    * A compiler for that takes care of delegating to the encoders
    * derived from partial schemas.
    */
  private[kernel] def restCombinedSchemaCompiler[F[_], Message](
      metadataEncoderCompiler: CachedSchemaCompiler[Encoder[Message, *]],
      bodyEncoderCompiler: CachedSchemaCompiler[Encoder[Message, *]]
  ): CachedSchemaCompiler[Encoder[Message, *]] =
    new CachedSchemaCompiler[Encoder[Message, *]] {

      type MetadataCache = metadataEncoderCompiler.Cache
      type BodyCache = bodyEncoderCompiler.Cache
      type Cache = (MetadataCache, BodyCache)
      def createCache(): Cache = {
        val mCache = metadataEncoderCompiler.createCache()
        val bCache = bodyEncoderCompiler.createCache()
        (mCache, bCache)
      }
      def fromSchema[A](schema: Schema[A]): Encoder[Message, A] =
        fromSchema(schema, createCache())

      def fromSchema[A](
          fullSchema: Schema[A],
          cache: Cache
      ): Encoder[Message, A] = {
        HttpRestSchema(fullSchema) match {
          case HttpRestSchema.OnlyMetadata(metadataSchema) =>
            // The data can be fully decoded from the metadata.
            metadataEncoderCompiler.fromSchema(metadataSchema, cache._1)
          case HttpRestSchema.OnlyBody(bodySchema) =>
            // The data can be fully decoded from the body
            bodyEncoderCompiler.fromSchema(bodySchema, cache._2)
          case HttpRestSchema.MetadataAndBody(metadataSchema, bodySchema) =>
            val metadataEncoder =
              metadataEncoderCompiler
                .fromSchema(metadataSchema, cache._1)
                .contramap[A](PartialData.Total(_))
            val bodyEncoder =
              bodyEncoderCompiler
                .fromSchema(bodySchema, cache._2)
                .contramap[A](PartialData.Total(_))
            // The order matters here, as the metadata encoder might override headers
            // that would be set with body encoders (if a smithy member is annotated with
            // `@httpHeader("Content-Type")` for instance)
            bodyEncoder.combine(metadataEncoder)
          case HttpRestSchema.Empty(_) =>
            Encoder.noop
          // format: on
        }
      }
    }

}
