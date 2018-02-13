Types::NflTeamType = GraphQL::ObjectType.define do
  name 'NflTeam'

  field :id, !types.ID
  field :name, !types.String
  field :conference, types.String
  field :division, types.String
  field :color, types.String
  field :abbreviation, types.String
  field :home_field, types.String
  field :website, types.String
  field :wins, types.Int
  field :losses, types.Int
  field :ties, types.Int
  field :logo_file_name, types.String
  field :logo_content_type, types.String
end