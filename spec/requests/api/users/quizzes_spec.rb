# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Api::Users::Quizzes', type: :request do
  include_context 'login as current_user'
  let(:current_user) { create(:user) }

  describe 'GET /api/users/quizzes' do
    let!(:quizzes) { create_list(:quiz, 2, :with_questions, user: current_user) }
    it "returns current_users's quizzes" do
      get api_users_quizzes_path
      expect(response).to have_http_status(200)
      expect(response.body).to be_json
      expect(response.body).to be_json_including(
        quizzes: [{ id: quizzes.second.id }, { id: quizzes.first.id }]
      )
    end
  end

  describe 'GET /api/users/quizzes/:id' do
    let!(:quiz) { create(:quiz, :with_questions, user: current_user) }
    it "returns current_users's quiz" do
      get api_users_quiz_path(quiz)
      expect(response).to have_http_status(200)
      expect(response.body).to be_json
      expect(response.body).to be_json_including(
        id: quiz.id,
        title: quiz.title,
        description: quiz.description
      )
    end
  end
end
