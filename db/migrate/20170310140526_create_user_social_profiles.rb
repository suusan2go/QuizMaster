class CreateUserSocialProfiles < ActiveRecord::Migration[5.0]
  def change
    create_table :user_social_profiles do |t|
      t.references :user, foreign_key: true, index: true, null: false
      t.string :provider, null: false
      t.string :uid, null: false
      t.string :access_token
      t.string :access_secret
      t.string :name
      t.string :nickname
      t.string :email
      t.string :description
      t.string :image_url
      t.json :auth_dump

      t.index [:provider, :uid], unique: true
      t.timestamps
    end
  end
end
