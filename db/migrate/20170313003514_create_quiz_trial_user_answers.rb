class CreateQuizTrialUserAnswers < ActiveRecord::Migration[5.0]
  def change
    create_table :quiz_trial_user_answers do |t|
      t.references :quiz_trial, foreign_key: true, index: true, null: false
      t.references :question, foreign_key: { to_table: :quiz_questions }, index: true, null: false
      t.string :content, null: false
      t.boolean :correct, null: false, default: false

      t.index [:quiz_trial_id, :question_id], unique: true
      t.timestamps
    end
  end
end
