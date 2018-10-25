class RemoveTypeColumnFromLoans < ActiveRecord::Migration[5.1]
  def change
    remove_column :loans, :type
  end
end
