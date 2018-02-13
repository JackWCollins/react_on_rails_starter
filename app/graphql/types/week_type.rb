Types::WeekType = GraphQL::ObjectType.define do
  name 'Week'
  description 'A full week of NFL matchups'

  field :id, !types.ID
  field :week_number, !types.Int
  field :open_for_picks, types.Boolean
  field :start_date, types.DateTime
  field :end_date, types.DateTime
  field :deadline, types.DateTime
  field :active_for_scoring, types.Boolean
  field :default_team, -> { Types::NflTeamType }
  field :season, -> { Types::SeasonType }
end