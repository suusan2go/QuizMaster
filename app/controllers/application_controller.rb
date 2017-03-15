# frozen_string_literal: true
class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  private

  def require_sign_in
    redirect_to root_path unless current_user
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def sign_in(user:)
    reset_session
    session[:user_id] = user.id
  end

  def sign_out
    reset_session
  end
end
