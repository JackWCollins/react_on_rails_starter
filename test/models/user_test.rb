require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test "user has name and email graphQL fields" do
    user = KopoolReactSchema.types["User"]
    assert_equal ["id", "email", "name"], user.fields.keys
  end
end