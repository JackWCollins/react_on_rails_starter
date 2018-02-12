Types::NflTeamType = GraphQL::ObjectType.define do
  name 'NflTeam'
  description 'A team in the National Football League'

  field :id, !types.ID
end