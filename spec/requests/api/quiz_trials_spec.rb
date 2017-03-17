# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Api::QuizTrials', type: :request do
  include_context 'login as current_user'
  let(:current_user) { create(:user) }

  describe 'GET /api/quiz_trials/:id' do
    let!(:quiz_trial) { create(:quiz_trial, user: current_user) }
    it 'returns get quiz and question contents' do
      get api_quiz_trial_path(quiz_trial)
      expect(response).to have_http_status(200)
      expect(response.body).to be_json
      expect(response.body).to be_json_including(
        id: quiz_trial.id,
        quiz: { title: quiz_trial.quiz.title },
        next_question: Hash
      )
    end
  end

  describe 'POST /api/quiz_trials' do
    let!(:quiz) { create(:quiz, :with_questions) }
    it 'returns new quiz_trial id' do
      post api_quiz_quiz_trials_path(quiz)
      expect(response).to have_http_status(200)
      expect(response.body).to be_json
      expect(response.body).to be_json_including(id: Integer)
    end

    it 'creates 1 quiz_trial' do
      expect do
        post api_quiz_quiz_trials_path(quiz)
      end.to change { current_user.quiz_trials.count }.by(1)
    end

    context 'current_user has on going quiz trial' do
      let!(:quiz_trial) { quiz.start_trial(user: current_user) }
      it 'returns on going quiz_trial id' do
        post api_quiz_quiz_trials_path(quiz)
        expect(response).to have_http_status(200)
        expect(response.body).to be_json
        expect(response.body).to be_json_including(id: quiz_trial.id)
      end
      it 'dose not create quiz_trial' do
        expect do
          post api_quiz_quiz_trials_path(quiz)
        end.not_to change { current_user.quiz_trials.count }
      end
    end
  end
end
