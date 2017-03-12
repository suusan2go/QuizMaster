# frozen_string_literal: true
class Api::QuizzesController < Api::ApplicationController
  def create
    quiz = Quiz.new(quiz_params)
    if quiz.save
      # TODO: create QuizSerializer Class
      render_json props: quiz.as_json
    else
      # TODO: create ValidationErrorsSerializer Class
      render_json props: { validationErrors: Hash[*quiz.errors.keys.flat_map{ |k| [k, quiz.errors.full_messages_for(k) ] }] }, status: :unprocessable_entity
    end
  end

  def update
    quiz = current_user.quizzes.find(params[:id])
    if quiz.update(quiz_params)
      # TODO: create QuizSerializer Class
      render_json props: quiz.as_json
    else
      # TODO: create ValidationErrorsSerializer Class
      render_json props: { validationErrors: Hash[*quiz.errors.keys.flat_map{ |k| [k, quiz.errors.full_messages_for(k) ] }] }, status: :unprocessable_entity
    end
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title, :description).merge(user_id: current_user.id) if params[:quiz].present?
  end
end
