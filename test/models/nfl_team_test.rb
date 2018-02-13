require 'test_helper'

class NflTeamTest < ActiveSupport::TestCase
  test "NFL team has all appropriate graphQL fields" do
    team = KopoolReactSchema.types["NflTeam"]
    assert_equal ["id", "email", "name"], team.fields.keys
  end
end