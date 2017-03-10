# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  email      :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#  index_users_on_name   (name) UNIQUE
#

class User < ApplicationRecord
  class << self
    def find_or_create_from_omniauth(omniauth)
      profile = User::SocialProfile.find_or_initialize_from_omniauth(omniauth: omniauth)
      find_or_create_from_social_profile(social_profile: profile)
    end

    private

    def find_or_create_from_social_profile(social_profile:)
      return social_profile.user if social_profile.user
      social_profile.user = create! do |user|
        user.name = social_profile.name
        user.email = social_profile.email
        user.image_url = social_profile.image_url
      end
      social_profile.save!
      social_profile.user
    end
  end
end
