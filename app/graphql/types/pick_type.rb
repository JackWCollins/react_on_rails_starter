Types::PickType = GraphQL::ObjectType.define do
  name 'Pick'
  description 'A single week pick'

  field :id, !types.ID
  field :locked_in, types.Boolean
  field :auto_picked, types.Boolean
  field :week, -> { Types::WeekType }
  field :team, -> { Types::NflTeamType }
  field :matchup, -> { Types::MatchupType }
end