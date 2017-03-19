# frozen_string_literal: true
# == Schema Information
#
# Table name: quizzes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_quizzes_on_user_id  (user_id)
#

class Quiz < ApplicationRecord
  has_many :questions, -> { order(id: :desc) }, dependent: :destroy
  has_many :answers, through: :questions
  has_many :quiz_trials, dependent: :destroy
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true

  scope :triable, -> { joins(:questions).distinct }

  def start_trial(user:)
    quiz_trial = quiz_trials.on_going.find_by(user: user)
    return quiz_trial if quiz_trial.present?
    quiz_trials.create(
      user: user
    )
  end
end
