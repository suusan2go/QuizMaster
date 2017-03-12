# frozen_string_literal: true
class User::QuizSerializer < ApplicationSerializer
  property(:id)
  property(:title)
  property(:description)
  property(:questions)

  delegate :id, :title, :description, to: :model
  delegate :questions, to: :model, prefix: true

  def questions
    model_questions.map do |question|
      { id: question.id, content: question.content, answer_content: question.answer_content }
    end
  end
end
