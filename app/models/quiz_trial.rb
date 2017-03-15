# == Schema Information
#
# Table name: quiz_trials
#
#  id         :integer          not null, primary key
#  quiz_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_quiz_trials_on_quiz_id  (quiz_id)
#  index_quiz_trials_on_user_id  (user_id)
#

class QuizTrial < ApplicationRecord
  has_many :user_answers
  has_many :questions, through: :quiz, class_name: Quiz::Question.name
  belongs_to :quiz
  belongs_to :user

  scope :on_going, -> { all } # TODO add correct scope

  # TODO: implement
  def completed?
    true
  end

  def next_question
    rest_questions.order(id: :desc).first
  end

  def questions_count
    quiz.questions.count
  end

  def answered_questions_count
    user_answers.count
  end

  def correct_answers_count
    user_answers.correct.count
  end

  def rest_questions
    quiz.questions.where.not(id: answered_question_ids)
  end

  def checking_answer(question_id:, content:)
    question = rest_questions.find(question_id)
    user_answers.create(
      question: question,
      content: content,
      correct: question.correct_answer?(content: content)
    )
  end

  private

  def answered_question_ids
    user_answers.select(:question_id)
  end
end
