# == Schema Information
#
# Table name: quiz_question_answers
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  content     :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_quiz_question_answers_on_question_id  (question_id) UNIQUE
#

require 'rails_helper'

RSpec.describe Quiz::Question::Answer, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
