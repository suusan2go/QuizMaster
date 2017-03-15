# == Schema Information
#
# Table name: quiz_trials
#
#  id         :integer          not null, primary key
#  quiz_id    :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_quiz_trials_on_quiz_id  (quiz_id)
#  index_quiz_trials_on_user_id  (user_id)
#

require 'rails_helper'

RSpec.describe QuizTrial, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
