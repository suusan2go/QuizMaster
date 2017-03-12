class CreateQuizQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :quiz_questions do |t|
      t.references :quiz, foreign_key: true, null: false, index: true
      t.text :content, null: false

      t.timestamps
    end
  end
end
