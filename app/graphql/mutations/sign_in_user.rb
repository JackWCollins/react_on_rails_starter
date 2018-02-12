class Mutations::SignInUser < GraphQL::Function
  # define the arguments that this field will receive
  argument :email, !Types::AuthProviderEmailInput

  # define inline return type for the mutation
  type do
    name 'SignInPayload'

    field :token, types.String
    field :user, Types::UserType
  end

  def call(obj, args, context)
    input = args[:email]
    return unless input

    user = User.find_by(email: input[:email])
    return unless user
    return unless user.authenticate(input[:password])

    OpenStruct.new({
      token: AuthToken.token(user),
      user: user
     })
  end
end