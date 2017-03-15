# frozen_string_literal: true
class QuizTrialSerializer < ApplicationSerializer
  property(:id)

  delegate :id, to: :model
end
