# frozen_string_literal: true
class Api::Users::Quizzes::QuestionsController < Api::ApplicationController
  def create
    quiz = current_user.quizzes.find(params[:quiz_id])
    question = quiz.questions.build(question_params)
    if question.save
      # TODO: create QuestionSerializer Class
      render_json props: question.as_json
    else
      # TODO: create ValidationErrorsSerializer Class
      render_json props: { validationErrors: Hash[*question.errors.keys.flat_map{ |k| [k, question.errors.full_messages_for(k) ] }] }, status: :unprocessable_entity
    end
  end

  private

  def question_params
    params.require(:question).permit(:content, :answer_content) if params[:question].present?
  end
end
