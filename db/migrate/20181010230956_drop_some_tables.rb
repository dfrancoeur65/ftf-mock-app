class DropSomeTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :transactions
    drop_table :accounts
  end
end
