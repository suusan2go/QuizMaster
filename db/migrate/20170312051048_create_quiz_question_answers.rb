class CreateQuizQuestionAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :quiz_question_answers do |t|
      t.references :question, foreign_key: { to_table: :quiz_questions }, null: false, index: { unique: true }
      t.text :content, null: false

      t.timestamps
    end
  end
end
