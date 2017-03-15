# frozen_string_literal: true
class Api::QuizTrials::ResultsController < Api::ApplicationController
  def show
    user_answer = current_user.quiz_trials.find(params[:quiz_trial_id])
    render_json props: QuizTrial::ResultSerializer.new(model: user_answer).as_json
  end
end
