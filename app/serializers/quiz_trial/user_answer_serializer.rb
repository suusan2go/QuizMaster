# frozen_string_literal: true
class QuizTrial::UserAnswerSerializer < ApplicationSerializer
  property(:content)
  property(:answer_content)
  property(:question_content)
  property(:correct)
  property(:quiz_trial_id)
  property(:quiz_trial_finished)
  property(:id)

  delegate :content, :answer_content, :correct, :question_content, :id, to: :model

  def quiz_trial_finished
    model.quiz_trial.finished?
  end

  def quiz_trial_id
    model.quiz_trial.id
  end
end
