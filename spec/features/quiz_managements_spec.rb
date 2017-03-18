# frozen_string_literal: true
require 'rails_helper'

RSpec.feature 'QuizManagements', type: :feature, js: true do
  include_context 'login as current_user'
  given(:current_user) { create(:user) }
  given(:quiz_title) { 'Awesome MGS Quiz' }
  given(:quiz_description) { 'Questions about Kojima Hideo' }
  given(:question_content) { 'What is the main character name of MGS1?' }
  given(:question_answer_content) { 'Solid Snake' }
  scenario 'User creates a new quiz' do
    visit '/'
    click_link 'Create Your New Quiz !'

    # fill new quiz form
    fill_in 'title', with: quiz_title
    fill_in 'description', with: quiz_description
    click_button 'Save'

    expect(page).to have_text(quiz_title)
    expect(page).to have_text(quiz_description)

    # Add Questions
    click_link 'ADD QESTION'
    # emulate input to quil.js editor
    find('div.ql-editor').send_keys(question_content)
    fill_in 'answer_content', with: question_answer_content
    click_button 'SAVE'

    expect(page).to have_text(question_content)
    expect(page).to have_text(question_answer_content)
  end
end
