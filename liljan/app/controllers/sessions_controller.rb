class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omiauth.auth"])
    session[:user_id] = user.id
    redirect_to 'root_url'
  end

end
