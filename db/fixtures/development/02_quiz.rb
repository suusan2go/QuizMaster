# frozen_string_literal: true
Quiz.seed(:id,
  { id: 1, user_id: 1, title: 'About My Carrer', description: 'questions about suzan2go\'s carrer' },
  { id: 2, user_id: 2, title: 'Awesome MGS', description: 'questions about Metal Gear Solid' }
)

Quiz::Question.seed(:id,
  { id: 1, content: 'What is my best programming language?', answer_content: 'Ruby', quiz_id: 1},
  { id: 2, content: 'What is my favorite JavaScript library?', answer_content: 'React.js', quiz_id: 1},
  { id: 3, content: 'What is the main charactor name of MGS2?', answer_content: 'Raiden', quiz_id: 2},
  { id: 4, content: 'What is the Solid Snake\'s catchphrase?', answer_content: 'Kept you waiting, huh?', quiz_id: 2},
  { id: 5, content: 'MGS1 featured Solid Snake infiltrating which island?', answer_content: ' Shadow Moses', quiz_id: 2},
  { id: 6, content: 'What was the maximum load of the elevator in Communications Tower B?', answer_content: '300 kilograms', quiz_id: 2}
)
