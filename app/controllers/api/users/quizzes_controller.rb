# frozen_string_literal: true
class Api::Users::QuizzesController < Api::ApplicationController
  def index
    # TODO: pagination
    quizzes = current_user.quizzes.order(id: :desc)
    # TODO: Add QuizzesSerializer class
    render_json props: { quizzes: quizzes.as_json }
  end
end
