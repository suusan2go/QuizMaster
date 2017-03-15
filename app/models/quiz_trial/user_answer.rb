# == Schema Information
#
# Table name: quiz_trial_user_answers
#
#  id            :integer          not null, primary key
#  quiz_trial_id :integer          not null
#  question_id   :integer          not null
#  content       :string           not null
#  correct       :boolean          default("false"), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_quiz_trial_user_answers_on_question_id                    (question_id)
#  index_quiz_trial_user_answers_on_quiz_trial_id                  (quiz_trial_id)
#  index_quiz_trial_user_answers_on_quiz_trial_id_and_question_id  (quiz_trial_id,question_id) UNIQUE
#

class QuizTrial::UserAnswer < ApplicationRecord
  belongs_to :quiz_trial
  belongs_to :question, class_name: Quiz::Question.name

  scope :correct, -> { where(correct: true) }

  delegate :content, to: :question, prefix: true
  delegate :answer_content, to: :question

  validates :content, presence: true
end
