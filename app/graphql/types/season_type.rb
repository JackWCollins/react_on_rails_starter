Types::SeasonType = GraphQL::ObjectType.define do
  name 'Season'
  description 'An entire season of the KO Pool'

  field :id, !types.ID
  field :year, types.Int
  field :name, types.String
  field :entry_fee, types.Float
  field :open_for_registration, types.Boolean
end