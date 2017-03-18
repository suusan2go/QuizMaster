# frozen_string_literal: true
require 'rails_helper'

RSpec.feature 'Toppages', type: :feature, js: true do
  scenario 'User find a signin button' do
    visit '/'
    screenshot_and_save_page
    expect(page).to have_text('Sign In With Google')
  end
end
