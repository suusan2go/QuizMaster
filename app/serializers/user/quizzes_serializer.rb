# frozen_string_literal: true
class User::QuizzesSerializer < ApplicationSerializer
  property(:quizzes)

  def quizzes
    model.map do |quiz|
      { id: quiz.id, title: quiz.title, description: quiz.description }
    end
  end
end
