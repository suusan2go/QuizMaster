# frozen_string_literal: true
class Api::QuizTrials::UserAnswersController < Api::ApplicationController
  def show
    user_answer = current_user.user_answers.find(params[:id])
    render_json props: QuizTrial::UserAnswerSerializer.new(model: user_answer).as_json
  end

  def create
    quiz_trial = current_user.quiz_trials.find(params[:quiz_trial_id])
    user_answer = quiz_trial.check_answer(user_answer_params)
    if user_answer.valid?
      quiz_trial.finish_if_no_rest_questions
      render_json props: QuizTrial::UserAnswerSerializer.new(model: user_answer).as_json
    else
      render_json props: ValidationErrorsSerializer.new(model: user_answer).as_json, status: :unprocessable_entity
    end
  end

  private

  def user_answer_params
    params.require(:user_answer).permit(:content, :question_id).to_h.symbolize_keys
  end
end
