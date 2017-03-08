# frozen_string_literal: true
module ApplicationHelper
  def webpack_asset_path(path)
    return "http://localhost:3500/assets/#{path}" if Rails.env.development?
    manifest = Rails.application.config.assets.webpack_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "/assets/#{path}"
  end
end
