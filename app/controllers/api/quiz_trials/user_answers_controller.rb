# frozen_string_literal: true
class Api::QuizTrials::UserAnswersController < Api::ApplicationController
  def create
    quiz_trial = current_user.quiz_trials.find(params[:quiz_trial_id])
    user_answer = quiz_trial.checking_answer(user_answer_params)
    if user_answer.valid?
      render_json props: QuizTrial::UserAnswerSerializer.new(model: user_answer).as_json
    else
      render_json props: { validationErrors: Hash[*user_answer.errors.keys.flat_map{ |k| [k, user_answer.errors.full_messages_for(k) ] }] }, status: :unprocessable_entity
    end
  end

  def user_answer_params
    params.require(:user_answer).permit(:content, :question_id).to_h.symbolize_keys
  end
end
