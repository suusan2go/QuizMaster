# frozen_string_literal: true
class RootController < ApplicationController
  protect_from_forgery with: :exception
  around_action :hypernova_render_support

  def index
    render text: nil, layout: true
  end
end
