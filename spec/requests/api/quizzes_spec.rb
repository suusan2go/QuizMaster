# frozen_string_literal: true
require 'rails_helper'

RSpec.describe 'Api::Quizzes', type: :request, login_as: :current_user do
  include_context 'login as current_user'
  let(:current_user) { create(:user) }

  describe 'GET /api/quizzes' do
    let!(:quizzes) { create_list(:quiz, 2, :with_questions) }
    it 'returns quizzes json' do
      get api_quizzes_path
      expect(response).to have_http_status(200)
      expect(response.body).to be_json
      expect(response.body).to be_json_including(quizzes: Array)
    end
  end

  describe 'POST /api/quizzes' do
    it 'returns new quiz id' do
      post api_quizzes_path, params: { quiz: { title: 'awesome test', description: 'This is awesome test' } }
      expect(response).to have_http_status(200)
      expect(response.body).to be_json
      expect(response.body).to be_json_including(id: Integer)
    end
    it 'creates new quiz' do
      expect { post api_quizzes_path, params: { quiz: { title: 'awesome test', description: 'This is awesome test' } } }.to change(Quiz, :count).by(1)
    end

    context 'post invalid paramter' do
      it 'returns validation errors' do
        post api_quizzes_path, params: { quiz: { title: '', description: '' } }
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.body).to be_json
        expect(response.body).to be_json_including(validation_errors: { title: Array, description: Array })
      end
    end
  end

  describe 'PATCH /api/quizzes/:id' do
    let!(:quiz) { create(:quiz, user: current_user) }
    it 'returns updated quiz id' do
      patch api_quiz_path(quiz), params: { quiz: { title: 'awesome test 2', description: 'This is awesome test 2' } }
      expect(response).to have_http_status(200)
      expect(response.body).to be_json
      expect(response.body).to be_json_including(id: quiz.id)
      expect(quiz.reload.title).to eq 'awesome test 2'
    end
  end

  describe 'DELETE /api/quizzes/;id' do
    let!(:quiz) { create(:quiz, user: current_user) }
    it 'returns no content' do
      delete api_quiz_path(quiz)
      expect(response).to have_http_status(:no_content)
    end
    it 'deletes 1 quiz' do
      expect { delete api_quiz_path(quiz) }.to change { current_user.quizzes.count }.by(-1)
    end
  end
end
