FactoryGirl.define do
  factory :quiz do
    association :user, factory: :user
    title "Awesome Quiz Collection"
    description "this is awesome quiz description."

    trait :with_questions do
      transient do
        questions_count 5
      end

      after(:create) do |quiz, evaluator|
        evaluator.questions_count.times do
          create(:quiz_question, quiz: quiz)
        end
      end
    end
  end
end
