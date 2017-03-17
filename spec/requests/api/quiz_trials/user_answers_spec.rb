# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Api::QuizTrials::UserAnswers', type: :request do
  include_context 'login as current_user'
  let(:current_user) { create(:user) }

  describe 'GET /api/user_answers/:id' do
    let(:quiz_trial) { create(:quiz_trial, user: current_user) }
    let!(:user_answer) { quiz_trial.check_answer(question_id: quiz_trial.questions.first.id, content: 'five') }
    it 'returns user_answer json' do
      get api_user_answer_path(user_answer)
      expect(response).to have_http_status(200)
      expect(response.body).to be_json_including(id: user_answer.id)
    end
  end

  describe 'POST /api/quiz_trials/:id/user_answers' do
    let(:quiz_trial) { create(:quiz_trial, user: current_user) }
    it 'returns user_answer id' do
      post api_quiz_trial_user_answers_path(quiz_trial), params: {
        user_answer: { content: 'five', question_id: quiz_trial.questions.last.id }
      }
      expect(response).to have_http_status(200)
      expect(response.body).to be_json_including(id: Integer)
    end
    it 'create user_answer' do
      expect{post api_quiz_trial_user_answers_path(quiz_trial), params: {
        user_answer: { content: 'five', question_id: quiz_trial.questions.last.id }
      }}.to change(QuizTrial::UserAnswer, :count).by(1)
    end
  end
end
