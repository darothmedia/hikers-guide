class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update

  end

  def show

  end

  def index

  end

  def destroy

  end

  private
  def select_user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password)
  end
end
