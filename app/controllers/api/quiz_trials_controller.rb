# frozen_string_literal: true
class Api::QuizTrialsController < Api::ApplicationController
  def show
    quiz_trial = find_current_user_quiz_trial
    render_json props: QuizTrial::ContentsSerializer.new(model: quiz_trial).as_json
  end

  def create
    quiz = Quiz.published.find(params[:quiz_id])
    quiz_trial = quiz.start_trial(user: current_user)
    if quiz_trial.valid?
      render_json props: QuizTrialSerializer.new(model: quiz_trial).as_json
    else
      render_json props: {}, status: :unprocessable_entity
    end
  end

  def update
    quiz_trial = find_current_user_quiz_trial
    if quiz_trial.finish
      render_json props: QuizTrial::ResultSerializer.new(model: quiz).as_json
    else
      render_json props: {}, status: :unprocessable_entity
    end
  end

  private

  def find_current_user_quiz_trial
    current_user.quiz_trials.on_going.find(params[:id])
  end
end
