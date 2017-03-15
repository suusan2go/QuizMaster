# frozen_string_literal: true
class QuizTrial::ResultSerializer < ApplicationSerializer
  property(:answered_questions_count)
  property(:correct_answers_count)

  delegate :answered_questions_count, :correct_answers_count, to: :model
end
