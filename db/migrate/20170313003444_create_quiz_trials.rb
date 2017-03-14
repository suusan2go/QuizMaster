class CreateQuizTrials < ActiveRecord::Migration[5.0]
  def change
    create_table :quiz_trials do |t|
      t.references :quiz, foreign_key: true, null: false, index: true
      t.references :user, foreign_key: true, null: false, index: true
      t.integer :questions_count, null: false
      t.integer :correct_answers_count

      t.timestamps
    end
  end
end
