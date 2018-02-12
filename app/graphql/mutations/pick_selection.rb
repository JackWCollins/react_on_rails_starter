class Mutations::PickSelection < GraphQL::Function
  argument :nfl_team_id, !types.Int
  argument :pool_entry_id, !types.Int
  argument :week_id, !types.Int

  type Types::PickType

  def call(obj, args, context)
    # Raise an exception if there is no user present
    if context[:current_user].blank?
      raise GraphQL::ExecutionError.new("Authentication required")
    end

    picked_team = NflTeam.find_by(id: args[:nfl_team_id])
    week = Week.find_by(id: args[:week_id])
    pool_entry = PoolEntry.find_by(id: args[:pool_entry_id])

    pick = current_user.picks.create!(
      nfl_team: picked_team,
      week: week,
      pool_entry: pool_entry
    )

    pick
  rescue ActiveRecord::RecordInvalid => e
    GraphQL::ExecutionError.new("There was an error saving your pick. Please refresh and try again.")
  end
end