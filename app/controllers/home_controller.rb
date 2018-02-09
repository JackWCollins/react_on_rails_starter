class HomeController < ApplicationController
  def index
    @home_props = {
        season: "2018",
        small_logo_path: ActionController::Base.helpers.asset_path('kopool_c_sm.png'),
        smedium_logo_path: ActionController::Base.helpers.asset_path('kopool_c_med.png'),
    }
  end
end
