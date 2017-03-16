# == Schema Information
#
# Table name: quiz_trials
#
#  id          :integer          not null, primary key
#  quiz_id     :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  finished_at :datetime
#  status      :integer          default("0"), not null
#
# Indexes
#
#  index_quiz_trials_on_quiz_id  (quiz_id)
#  index_quiz_trials_on_user_id  (user_id)
#

require 'rails_helper'

RSpec.describe QuizTrial, type: :model do
  let(:quiz_trial) { create(:quiz_trial, quiz: quiz) }
  let(:quiz){ create(:quiz, :with_questions) }

  shared_context 'All Questions have been answered' do
    before do
      quiz.questions.each do |question|
        quiz_trial.check_answer(question_id: question.id, content: '5')
      end
    end
  end

  describe '#next_question' do
    subject { quiz_trial.next_question }
    context 'no question have been answered' do
      it { is_expected.to eq quiz_trial.questions.order(id: :desc).first }
    end
    context 'all questions have been answered' do
      include_context 'All Questions have been answered'
      it { is_expected.to eq nil }
    end
  end

  describe '#rest_questions' do
    subject { quiz_trial.rest_questions }
    context 'no question have been answered' do
      it { is_expected.to match quiz.questions }
    end
    context 'all questions have been answered' do
      include_context 'All Questions have been answered'
      it { is_expected.to be_empty }
    end
  end

  describe '#questions_count' do
    subject { quiz_trial.questions_count }
    it { is_expected.to eq quiz.questions.count }
  end

  describe '#answered_questions_count' do
    subject { quiz_trial.answered_questions_count }
    context 'no question have been answered' do
      it { is_expected.to eq 0 }
    end
    context 'all questions have been answeredd' do
      include_context 'All Questions have been answered'
      it { is_expected.to eq quiz.questions.count }
    end
  end

  describe '#correct_answers_count' do
    subject { quiz_trial.correct_answers_count }
    context 'no question have been answered' do
      it { is_expected.to eq 0 }
    end
    context 'all questions have been answered' do
      include_context 'All Questions have been answered'
      it { is_expected.to eq 5 }
    end
  end

  describe '#check_answer' do
    subject { quiz_trial.check_answer(question_id: question_id, content: content) }
    let(:question_id) { quiz.questions.first.id }
    let(:content){ 5 }
    it { is_expected.to be_a QuizTrial::UserAnswer }
    context 'answer is correct' do
      let(:content) { '5' }
      it { is_expected.to be_correct  }
    end
    context 'answer is wrong' do
      let(:content) { 3 }
      it { is_expected.not_to be_correct  }
    end
  end

  describe '#finish_if_no_rest_questions' do
    subject { quiz_trial.finish_if_no_rest_questions }
    context 'all questions have been answered' do
      include_context 'All Questions have been answered'
      it { expect{ quiz_trial.finish_if_no_rest_questions }.to change{quiz_trial.status}.from('on_going').to('finished') }
    end
    context 'questions not answered left' do
      before { quiz_trial.check_answer(question_id: quiz.questions.first.id, content: '5') }
      it { expect{ quiz_trial.finish_if_no_rest_questions }.not_to change{quiz_trial.status} }
    end
  end
end
