class Api::TrailsController < ApplicationController
  def show
    @trail = select_trail
    mkey = Figaro.env.mapbox_token
  end

  def index
    @trails = Trail.all
  end

  private
  def select_trail
    Trail.find(params[:id])
  end
end
