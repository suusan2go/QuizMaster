# == Schema Information
#
# Table name: quizzes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  status      :integer          default("0"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_quizzes_on_user_id  (user_id)
#

require 'rails_helper'

RSpec.describe Quiz, type: :model do
  describe '#start_trial' do
    let(:quiz) { create(:quiz) }
    let(:user) { create(:user) }
    subject { quiz.start_trial(user: user) }
    context 'user has no on goinng quiz trials' do
      before { create(:quiz_trial, :finished, user: user, quiz: quiz) }
      it { is_expected.to be_a QuizTrial }
      it { expect{subject}.to change(QuizTrial, :count).by(1) }
    end
    context 'user has on goinng quiz trials' do
      before { create(:quiz_trial, user: user, quiz: quiz) }
      it { is_expected.to be_a QuizTrial }
      it { expect{subject}.not_to change(QuizTrial, :count) }
    end
  end
end
