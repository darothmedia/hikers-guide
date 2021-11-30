class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render `/api/trails`
    else
      render json: @review.errors.full_messages, status: 401
    end

  end

  def update
    @review = select_review
    if @review.update(review_params)
      render `/api/trails/#{@review.trail_id}`
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
    @review = select_review
    if @review
      @review.destroy
      render `/api/trails/#{@review.trail_id}`
    else
      render ['Review does not exist']
    end
  end

  def show
    @review = select_review
  end

  def index
    @reviews = Review.all
  end

  private
  def select_review
    Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:body, :rating, :actdate, :author_id, :trail_id)
  end

end
