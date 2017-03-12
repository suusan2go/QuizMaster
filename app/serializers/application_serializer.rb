# frozen_string_literal: true
class ApplicationSerializer
  include JsonWorld::DSL
  attr_reader :current_user, :model

  def initialize(model: nil, current_user: nil)
    @current_user = current_user
    @model = model
  end
end
