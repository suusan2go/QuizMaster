# frozen_string_literal: true
class Api::QuizzesController < Api::ApplicationController
  def create
    quiz = Quiz.new(quiz_params)
    if quiz.save
      # TODO: create QuizSerializer Class
      render_json props: quiz.as_json
    else
      # TODO: create ValidationErrorsSerializer Class
      redner_json props: { validationErrors: quiz.errors.full_messages }, status: :bad_request
    end
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title, :description).merge(user_id: current_user.id)
  end
end
