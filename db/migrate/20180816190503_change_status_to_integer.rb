class ChangeStatusToInteger < ActiveRecord::Migration[5.1]
  def change
    remove_column :investments, :status
    add_column :investments, :status, :integer, default: 0
  end
end
