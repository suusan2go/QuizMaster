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
  has_one :answer,
    class_name: Quiz::Question::Answer.name,
    autosave: true,
    dependent: :destroy
  has_many :quiz_trial_user_answers, class_name: QuizTrial::UserAnswer, dependent: :destroy
  belongs_to :quiz
  validates :content, presence: true
  validates :answer_content, presence: true

  before_validation :sanitize_html_content

  delegate :content, to: :answer, prefix: true, allow_nil: true

  def answer_content=(value)
    a = answer || build_answer
    a.content = value
  end

  # TODO: Normalize and format numbers
  def correct_answer?(content:)
    normalized_answer_content == Quiz::Question::TextNormalizer.normalize(content: content)
  end

  private

  def normalized_answer_content
    Quiz::Question::TextNormalizer.normalize(content: answer_content)
  end

  def sanitize_html_content
    self.content = Quiz::Question::HtmlSanitizer.sanitize(content: content)
  end
end
