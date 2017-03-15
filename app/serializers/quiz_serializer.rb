# frozen_string_literal: true
class QuizSerializer < ApplicationSerializer
  property(:id)
  property(:title)
  property(:description)

  delegate :id, :title, :description, to: :model
end
