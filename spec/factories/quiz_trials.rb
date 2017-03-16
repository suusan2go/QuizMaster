FactoryGirl.define do
  factory :quiz_trial do
    association :user, factory: :user
    association :quiz, factory: :quiz

    trait :finished do
      status :finished
      finished_at { Time.current }
    end
  end
end
