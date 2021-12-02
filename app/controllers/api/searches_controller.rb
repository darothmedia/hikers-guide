class Api::SearchesController < ApplicationController
  def index
      @trails = Trail.where("name ILIKE ?", "%#{query}")
      @parks = Park.where("name ILIKE ?", "%#{query}")

      render :results
  end
end
