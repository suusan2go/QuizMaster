# frozen_string_literal: true
class Api::QuizzesController < Api::ApplicationController
  def index
    quizzes = Quiz.published.order(id: :desc)
    render_json props: QuizzesSerializer.new(model: quizzes).as_json
  end

  def create
    quiz = Quiz.new(quiz_params)
    if quiz.save
      # TODO: create QuizSerializer Class
      render_json props: quiz.as_json
    else
      # TODO: create ValidationErrorsSerializer Class
      render_json props: ValidationErrorsSerializer.new(model: quiz).as_json, status: :unprocessable_entity
    end
  end

  def update
    quiz = current_user.quizzes.find(params[:id])
    if quiz.update(quiz_params)
      # TODO: create QuizSerializer Class
      render_json props: quiz.as_json
    else
      # TODO: create ValidationErrorsSerializer Class
      render_json props: ValidationErrorsSerializer.new(model: quiz).as_json, status: :unprocessable_entity
    end
  end

  def destroy
    quiz = current_user.quizzes.find(params[:id])
    quiz.destroy
    render_json props: {}, status: :no_content
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title, :description).merge(user_id: current_user.id) if params[:quiz].present?
  end
end
