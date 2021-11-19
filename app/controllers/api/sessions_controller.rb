class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Login failed. Please check your email and password.'], status: 401
    else
      login(@user)
      render '/'
    end
  end

  def destroy
    logout
    render '/'
  end

end
