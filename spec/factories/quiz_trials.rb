# == Schema Information
#
# Table name: quiz_trials
#
#  id          :integer          not null, primary key
#  quiz_id     :integer          not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  finished_at :datetime
#  status      :integer          default("0"), not null
#
# Indexes
#
#  index_quiz_trials_on_quiz_id  (quiz_id)
#  index_quiz_trials_on_user_id  (user_id)
#

FactoryGirl.define do
  factory :quiz_trial do
    association :user, factory: :user
    association :quiz, factory: [:quiz, :with_questions]

    trait :finished do
      status :finished
      finished_at Time.current
      after(:create) do |quiz_trial|
        quiz_trial.questions.each do |q|
          quiz_trial.check_answer(question_id: q.id, content: 'answer')
        end
      end
    end
  end
end
