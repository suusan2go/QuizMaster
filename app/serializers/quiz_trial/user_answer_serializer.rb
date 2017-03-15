# frozen_string_literal: true
class QuizTrial::UserAnswerSerializer < ApplicationSerializer
  property(:content)
  property(:answer_content)
  property(:question_content)
  property(:correct)
  property(:id)

  delegate :content, :answer_content, :correct, :question_content, :id, to: :model
end
