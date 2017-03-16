FactoryGirl.define do
  factory :quiz_question, class: 'Quiz::Question' do
    association :quiz, factory: :quiz
    content 'How many vowels are there in the English alphabet?'
    answer_content 5
  end
end
