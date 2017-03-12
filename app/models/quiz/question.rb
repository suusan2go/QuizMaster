# frozen_string_literal: true
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

class Quiz::Question < ApplicationRecord
  has_one :answer, class_name: Quiz::Question::Answer.name, autosave: true
  belongs_to :quiz
  validates :content, presence: true
  validates :answer_content, presence: true

  delegate :content, to: :answer, prefix: true, allow_nil: true

  def answer_content=(value)
    a = answer || build_answer
    a.content = value
  end
end
