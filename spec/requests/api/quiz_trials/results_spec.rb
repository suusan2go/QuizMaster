# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Api::QuizTrials::Results', type: :request do
  include_context 'login as current_user'
  let(:current_user) { create(:user) }

  describe 'GET /api/quiz_trials/:id/results' do
    let!(:quiz_trial){ create(:quiz_trial, :finished, user: current_user) }
    it 'returns quiz_trial results' do
      get api_quiz_trial_result_path(quiz_trial)
      expect(response).to have_http_status(200)
      expect(response.body).to be_json_including(
        answered_questions_count: quiz_trial.answered_questions_count,
        correct_answers_count: quiz_trial.correct_answers_count
      )
    end
  end
end
