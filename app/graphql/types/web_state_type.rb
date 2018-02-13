Types::WebStateType = GraphQL::ObjectType.define do
  name 'WebState'
  description 'An object to keep track of the status of the current season and week'

  field :id, !types.ID
  field :broadcast_message, types.String
  field :week, -> { Types::WeekType }
  field :season, -> { Types::SeasonType }
end