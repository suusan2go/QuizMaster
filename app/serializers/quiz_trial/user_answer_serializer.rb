# frozen_string_literal: true
class QuizTrial::UserAnswerSerializer < ApplicationSerializer
  property(:content)
  property(:answer_content)
  property(:correct)

  delegate :content, :answer_content, :correct, to: :model
end
