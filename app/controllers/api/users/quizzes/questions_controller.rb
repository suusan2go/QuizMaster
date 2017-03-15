# frozen_string_literal: true
class Api::Users::Quizzes::QuestionsController < Api::ApplicationController
  def create
    quiz = current_user.quizzes.find(params[:quiz_id])
    question = quiz.questions.build(question_params)
    if question.save
      render_json props: QuestionSerializer.new(model: question).as_json
    else
      render_json props: ValidationErrorsSerializer.new(model: question).as_json, status: :unprocessable_entity
    end
  end

  def update
    question = current_user.questions.find(params[:id])
    if question.update(question_params)
      render_json props: QuestionSerializer.new(model: question).as_json
    else
      render_json props: ValidationErrorsSerializer.new(model: question).as_json, status: :unprocessable_entity
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
