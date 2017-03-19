# frozen_string_literal: true
User.seed(:id,
  { id: 1, name: 'jon', email: 'jon@example.com', image_url: 'https://robohash.org/QuizMaster01?size=96x96' },
  { id: 2, name: 'emily', email: 'emily@example.com', image_url: 'https://robohash.org/QuizMaster02?size=96x96'},
  { id: 3, name: 'snake', email: 'snake@example.com', image_url: 'https://robohash.org/QuizMaster03?size=96x96'}
)
