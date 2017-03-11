class CreateQuizzes < ActiveRecord::Migration[5.0]
  def change
    create_table :quizzes do |t|
      t.references :user, foreign_key: true, index: true, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :status, null: false, default: 0

      t.timestamps
    end
  end
end
