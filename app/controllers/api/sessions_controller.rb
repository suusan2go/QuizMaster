# frozen_string_literal: true
class Api::SessionsController < Api::ApplicationController
  def destroy
    sign_out
    render nothing: true, status: :no_content
  end
end
