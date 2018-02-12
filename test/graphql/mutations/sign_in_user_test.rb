require 'test_helper'

class Mutations::SignInUserTest < ActiveSupport::TestCase
  def perform(args={})
    Mutations::SignInUser.new.call(nil, args, {cookies: []})
  end

  setup do
    @user = users(:jack)
  end

  test 'creates a token on successful sign in' do
    result = perform(
      email: {
        email: @user.email,
        password: 'jack_password'
      }
    )

    assert result.present?
    assert result.token.present?
    assert_equal @user, result.user
  end

  test 'returns nil without credentials' do
    assert_nil perform
  end

  test 'returns nil with incorrect email' do
    assert_nil perform(email: {email: 'wrong'})
  end

  test 'returns nil with incorrect password' do
    assert_nil perform(email: {email: @user.email, password: 'wrong'})
  end
end