# == Schema Information
#
# Table name: quizzes
#
#  id          :integer          not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text             not null
#  status      :integer          default("0"), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_quizzes_on_user_id  (user_id)
#

require 'rails_helper'

RSpec.describe Quiz, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
