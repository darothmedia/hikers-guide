class Api::ParksController < ApplicationController
  def show
    @park = select_park
  end

  def index
    @parks = Park.all
  end

  private
  def select_park
    Park.find(params[:id])
  end
end
