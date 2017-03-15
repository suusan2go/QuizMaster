class AddColumnToQuizTrial < ActiveRecord::Migration[5.0]
  def change
    add_column :quiz_trials, :finished_at, :datetime
    add_column :quiz_trials, :status, :integer, null: false, default: 0
  end
end
