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
    @user = select_user
    if @user.update(user_params)
      render '/'
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = select_user
  end

  def index
    @users = User.all
  end

  def destroy
    @user = select_user
    if @user
      @user.destroy
      render '/'
    else
      render ['User does not exist']
    end
  
  end

  private
  def select_user
    User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :fname, :lname, :password)
  end
end
