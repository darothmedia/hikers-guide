class Api::ReviewsController < ApplicationController

  def create
    @review = Review.new(review_params)
    if @review.save
      render :create
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update
    @review = select_review
    if @review.update(review_params)
      render :update
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = select_review
    if @review
      @review.destroy
      render :show
    else
      render ['Review does not exist']
    end
  end

  def show
    @review = select_review
  end

  def index
    @reviews = Review.where(trail_id: params[:trail_id])
    render :index
  end

  private
  def select_review
    Review.find(params[:id])
  end

  def review_params
    params.require(:review).permit(:body, :rating, :actdate, :author_id, :trail_id)
  end

end
