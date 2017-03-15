# == Schema Information
#
# Table name: quiz_trials
#
#  id                    :integer          not null, primary key
#  quiz_id               :integer          not null
#  user_id               :integer          not null
#  questions_count       :integer          not null
#  correct_answers_count :integer
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#
# Indexes
#
#  index_quiz_trials_on_quiz_id  (quiz_id)
#  index_quiz_trials_on_user_id  (user_id)
#

class QuizTrial < ApplicationRecord
  has_many :user_answers
  belongs_to :quiz
  belongs_to :user

  scope :on_going, -> { all } # TODO add correct scope

  def answered_question_ids
    user_answers.select(:question_id)
  end
end
