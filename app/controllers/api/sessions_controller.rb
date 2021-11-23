class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ['User authentication failed. Check your credentials.'], status: 422
    else
      login(@user)
      render :show
    end
  end

  def destroy
    if current_user
      logout
      render :show
    else
      render json: ['Logout failed. There is no user logged in.'], status: 401
    end
  end

end
