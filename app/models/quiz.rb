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

class Quiz < ApplicationRecord
  enum status: { draft: 0, published: 10 }

  has_many :questions, -> { order(id: :desc) }, dependent: :destroy
  has_many :answers, through: :questions
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true

  scope :published, -> { joins(:questions).distinct }
end
