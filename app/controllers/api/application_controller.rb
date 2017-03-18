# frozen_string_literal: true
class Api::ApplicationController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :require_sign_in
  rescue_from StandardError, with: :handle_error

  private

  def handle_error(error)
    error_notifiy(error)
    case error
    when ActiveRecord::RecordNotFound
      render :json, json: { errors: [message: :not_found] }, status: :not_found
    else
      render :json, json: { errors: [message: 'We are sorry, this Error should never happen to you'] }, status: :internal_server_error
    end
  end

  def error_notifiy(error)
    # Logging and Reporting to Issue Tracking System
  end

  def require_sign_in
    return if current_user
    render :json, json: { errors: [message: :require_sign_in] }, status: :unauthorized
  end

  def common_props
    {
      currentUser: current_user,
      locationPath: request.path
    }
  end

  def render_json(props:, status: :ok)
    render json: common_props.merge(props.as_json), status: status
  end
end
