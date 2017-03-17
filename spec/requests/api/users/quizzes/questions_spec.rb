# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Api::Users::Quizzes::Questions', type: :request do
  include_context 'login as current_user'
  let(:current_user) { create(:user) }

  describe 'POST /api/users/quizzes/:id/questions' do
    let(:quiz) { create(:quiz, user: current_user) }
    it 'create new question' do
      expect do
        post api_users_quiz_questions_path(quiz), params: {
          question: {
            content: 'What is my name?',
            answer_content: 'suzan2go'
          }
        }
      end.to change(Quiz::Question, :count).by(1).and \
        change(Quiz::Question::Answer, :count).by(1)
      expect(response).to have_http_status(200)
      expect(response.body).to be_json_including(
        id: Integer,
        content: String,
        answer_content: String
      )
    end
  end

  describe 'PATCH /api/users/questions/:id/' do
    let(:quiz) { create(:quiz, user: current_user) }
    let!(:question){ create(:quiz_question, quiz: quiz) }
    it 'update question' do
      expect do
        patch api_users_question_path(question), params: {
          question: {
            content: 'What is your name?',
            answer_content: 'Hideo Kojima'
          }
        }
      end.to change(Quiz::Question, :count).by(0).and \
        change(Quiz::Question::Answer, :count).by(0)
      expect(response).to have_http_status(200)
      expect(response.body).to be_json_including(
        id: question.id,
        content: 'What is your name?',
        answer_content: 'Hideo Kojima'
      )
    end
  end

  describe 'DELETE /api/questions/:id' do
    let(:quiz) { create(:quiz, user: current_user) }
    let!(:question){ create(:quiz_question, quiz: quiz) }
    it 'delete question' do
      expect{delete api_users_question_path(question)}.to change(Quiz::Question, :count).by(-1).and \
                                                          change(Quiz::Question::Answer, :count).by(-1)
      expect(response).to have_http_status(:no_content)
    end
  end
end
