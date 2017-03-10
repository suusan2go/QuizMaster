# == Schema Information
#
# Table name: user_social_profiles
#
#  id            :integer          not null, primary key
#  user_id       :integer          not null
#  provider      :string           not null
#  uid           :string           not null
#  access_token  :string
#  access_secret :string
#  name          :string
#  nickname      :string
#  email         :string
#  description   :string
#  image_url     :string
#  auth_dump     :json
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_user_social_profiles_on_provider_and_uid  (provider,uid) UNIQUE
#  index_user_social_profiles_on_user_id           (user_id)
#

class User::SocialProfile < ApplicationRecord
  belongs_to :user
end
