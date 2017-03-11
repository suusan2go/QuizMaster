# frozen_string_literal: true
class AuthsController < ApplicationController
  def callback
    user = User.find_or_create_from_omniauth(omniauth)
    sign_in(user: user)
    redirect_to root_url
  end
  alias google callback

  private

  def omniauth
    @omniauth ||= request.env['omniauth.auth']
  end
end
