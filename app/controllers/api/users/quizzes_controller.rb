# frozen_string_literal: true
require_dependency(Rails.root.join('app/serializers/user', 'quizzes_serializer'))
require_dependency(Rails.root.join('app/serializers/user', 'quiz_serializer'))
class Api::Users::QuizzesController < Api::ApplicationController
  def index
    # TODO: pagination
    quizzes = current_user.quizzes.order(id: :desc)
    render_json props: User::QuizzesSerializer.new(model: quizzes).as_json
  end

  def show
    quiz = current_user.quizzes.includes(questions: [:answer]).find(params[:id])
    render_json props: User::QuizSerializer.new(model: quiz).as_json
  end
end
