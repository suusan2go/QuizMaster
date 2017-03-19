# == Schema Information
#
# Table name: quizzes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_quizzes_on_user_id  (user_id)
#

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
