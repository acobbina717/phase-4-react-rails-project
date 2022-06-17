class SessionsController < ApplicationController

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: 200
    else
      render json: { error: 'Invalid email or password' }, status: 401
    end
  end

  def destroy
    session.delete(:user_id)
    head 204
  end

end
