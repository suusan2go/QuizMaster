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

require 'rails_helper'

RSpec.describe User, type: :model do
  describe '.find_or_create_from_omniauth' do
    let(:auth_hash) {
      OmniAuth::AuthHash.new(
        provider: "google_oauth2",
        uid: "123456789",
        info: {
          name: "hogehoge",
          email: Faker::Internet.email,
          image: Faker::Avatar.image
        },
        credentials: {
          token: 'token'
        }
      )
    }
    subject { User.find_or_create_from_omniauth(auth_hash) }
    it { is_expected.to be_a User }
    it 'Create User and SocialProfile record' do
      expect{subject}.to change(User, :count).by(1).and \
                         change(User::SocialProfile, :count).by(1)
    end

    context 'already singup user' do
      before { User.find_or_create_from_omniauth(auth_hash) }
      it { is_expected.to be_a User }
      it 'Find User and SocialProfile record' do
        expect{subject}.to change(User, :count).by(0).and \
                           change(User::SocialProfile, :count).by(0)
      end
    end
  end
end
