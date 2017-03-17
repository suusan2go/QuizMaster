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
