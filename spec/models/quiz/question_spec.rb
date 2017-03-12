# == Schema Information
#
# Table name: quiz_questions
#
#  id         :integer          not null, primary key
#  quiz_id    :integer          not null
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_quiz_questions_on_quiz_id  (quiz_id)
#

require 'rails_helper'

RSpec.describe Quiz::Question, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
