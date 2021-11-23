class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: @user.errors.full_messages, status: 401
    else
      login(@user)
      render '/'
    end
  end

  def destroy
    if current_user
      logout
      render {}
    else
      render json: ['Logout failed. There is no user logged in.'], status: 401
    end
  end

end
