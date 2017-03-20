# frozen_string_literal: true
require 'rails_helper'

RSpec.feature 'QuizTrials', type: :feature, js: true do
  include_context 'login as current_user'
  given(:current_user) { create(:user) }
  given(:quiz_title) { 'Awesome MGS Quiz' }
  given!(:quiz){ create(:quiz, :with_questions, questions_count: 1, title: quiz_title) }
  scenario 'User tries quiz' do
    visit '/'
    find('.quiz-title', text: quiz.title).click
    expect(page).to have_text('Quiz Trial')
    expect(page).to have_text(quiz.questions.first.content)

    # Answer question
    fill_in 'answer', with: '5'
    click_button 'Submit'
    expect(page).to have_text('Your Answer is Correct.')
    click_button 'Next'

    # show result page
    expect(page).to have_text('Quiz Result')
  end
end
