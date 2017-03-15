class RemoveCounterColumnFromQuizTrial < ActiveRecord::Migration[5.0]
  def change
    remove_column :quiz_trials, :questions_count, :integer, null: false
    remove_column :quiz_trials, :correct_answers_count, :integer
  end
end
