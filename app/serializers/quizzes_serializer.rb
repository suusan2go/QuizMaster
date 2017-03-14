# frozen_string_literal: true
class QuizzesSerializer < ApplicationSerializer
  property(:quizzes)

  def quizzes
    model.map do |quiz|
      { id: quiz.id, title: quiz.title, description: quiz.description, image_url: quiz.user.image_url }
    end
  end
end
