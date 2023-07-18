package smithy4s.example

import smithy4s.Hints
import smithy4s.Schema
import smithy4s.ShapeId
import smithy4s.ShapeTag
import smithy4s.optics.Lens
import smithy4s.schema.Schema.int
import smithy4s.schema.Schema.string
import smithy4s.schema.Schema.struct

final case class ListCitiesInput(nextToken: Option[String] = None, pageSize: Option[Int] = None)
object ListCitiesInput extends ShapeTag.Companion[ListCitiesInput] {
  val id: ShapeId = ShapeId("smithy4s.example", "ListCitiesInput")

  val hints: Hints = Hints.empty

  object Lenses {
    val nextToken = Lens[ListCitiesInput, Option[String]](_.nextToken)(n => a => a.copy(nextToken = n))
    val pageSize = Lens[ListCitiesInput, Option[Int]](_.pageSize)(n => a => a.copy(pageSize = n))
  }

  implicit val schema: Schema[ListCitiesInput] = struct(
    string.optional[ListCitiesInput]("nextToken", _.nextToken),
    int.optional[ListCitiesInput]("pageSize", _.pageSize),
  ){
    ListCitiesInput.apply
  }.withId(id).addHints(hints)
}
