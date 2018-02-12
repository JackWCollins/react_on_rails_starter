Types::UserType = GraphQL::ObjectType.define do
  name 'User'
  description 'A single user in the system'

  field :id, !types.ID
  field :email, !types.String
  field :name, !types.String
end