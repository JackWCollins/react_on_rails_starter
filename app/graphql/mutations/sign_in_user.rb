class Mutations::SignInUser < GraphQL::Function
  # define the arguments that this field will receive
  argument :email, !types.String
  argument :password, !types.String

  # define inline return type for the mutation
  type do
    name 'SignInPayload'

    field :token, types.String
    field :user, Types::UserType
  end

  def call(obj, args, context)
    input = args[:email]
    return unless args.present?

    user = User.find_by(email: args[:email])
    return unless user
    return unless user.authenticate(args[:password])

    OpenStruct.new({
      token: AuthToken.token(user),
      user: user
     })
  end
end