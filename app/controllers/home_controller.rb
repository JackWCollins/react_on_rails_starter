class HomeController < ApplicationController
  def index
    @home_props = { season: "2018" }
  end
end
