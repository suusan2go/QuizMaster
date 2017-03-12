# frozen_string_literal: true
class Api::Users::QuestionsController < Api::ApplicationController
  def update
    question = current_user.questions.find(params[:id])
    if question.update(question_params)
      # TODO: create QuestionSerializer Class
      render_json props: question.as_json
    else
      # TODO: create ValidationErrorsSerializer Class
      render_json props: { validationErrors: Hash[*question.errors.keys.flat_map{ |k| [k, question.errors.full_messages_for(k) ] }] }, status: :unprocessable_entity
    end
  end

  def destroy
    question = current_user.questions.find(params[:id])
    question.destroy
    render_json props: {}, status: :no_content
  end

  private

  def question_params
    params.require(:question).permit(:content, :answer_content) if params[:question].present?
  end
end
