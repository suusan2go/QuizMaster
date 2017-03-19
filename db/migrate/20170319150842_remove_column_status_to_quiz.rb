class RemoveColumnStatusToQuiz < ActiveRecord::Migration[5.0]
  def change
    remove_column :quizzes, :status, :integer, default: 0, null: false
  end
end
