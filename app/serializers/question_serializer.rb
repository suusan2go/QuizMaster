# frozen_string_literal: true
class QuestionSerializer < ApplicationSerializer
  property(:id)
  property(:content)
  property(:answer_content)

  delegate :id, :content, :answer_content, to: :model
end
