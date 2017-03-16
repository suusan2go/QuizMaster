# == Schema Information
#
# Table name: quiz_questions
#
#  id         :integer          not null, primary key
#  quiz_id    :integer          not null
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_quiz_questions_on_quiz_id  (quiz_id)
#

require 'rails_helper'

RSpec.describe Quiz::Question, type: :model do
  let(:question) { create(:quiz_question, answer_content: answer) }
  describe '#correct_answer?' do
    subject { question.correct_answer?(content: content) }
    context 'answer is number' do
      let(:answer){ 5 }
      context 'submitted answer is number' do
        let(:content) { 5 }
        it { is_expected.to eq true }
      end

      context 'submitted answer is number word' do
        let(:content) { 'five' }
        it { is_expected.to eq true }
      end

      context 'submitted answer contains whitespace' do
        let(:content) { "five 　\n" }
        it { is_expected.to eq true }
      end
    end

    context 'answer is number and words' do
      let(:answer){ 'five dogs' }
      context 'submitted answer contains number' do
        let(:content) { '5 dogs' }
        it { is_expected.to eq true }
      end

      context 'submitted answer is number word' do
        let(:content) { 'five dogs' }
        it { is_expected.to eq true }
      end

      context 'submitted answer contains whitespace' do
        let(:content) { ' five  dogs ' }
        it { is_expected.to eq true }
      end

      context 'submitted answer has different cases' do
        let(:content) { 'five Dogs' }
        it { is_expected.to eq true }
      end
    end
  end
end
