# frozen_string_literal: true
# == Schema Information
#
# Table name: quiz_question_answers
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  content     :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_quiz_question_answers_on_question_id  (question_id) UNIQUE
#

class Quiz::Question::Answer < ApplicationRecord
  belongs_to :question, class_name: Quiz::Question.name
  validates :content, presence: true
end
