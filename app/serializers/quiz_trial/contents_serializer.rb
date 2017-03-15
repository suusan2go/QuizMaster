# frozen_string_literal: true
class QuizTrial::ContentsSerializer < ApplicationSerializer
  property(:rest_questions_count)
  property(:questions_count)
  property(:quiz)
  property(:completed)
  property(:next_question)
  property(:id)

  delegate :id, :questions_count, to: :model
  delegate :quiz, to: :model, prefix: true

  def rest_questions_count
    model.rest_questions.count
  end

  def next_question
    return unless next_question
    {
      id: model.next_question.id,
      content: model.next_question.content
    }
  end

  def quiz
    {
      title: model_quiz.title
    }
  end

  def completed
    model.completed?
  end
end
