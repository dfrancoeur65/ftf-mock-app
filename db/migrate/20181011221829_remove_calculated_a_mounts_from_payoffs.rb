class RemoveCalculatedAMountsFromPayoffs < ActiveRecord::Migration[5.1]
  def change
    remove_column :payoffs, :amount
    remove_column :payoffs, :outstanding_amount
  end
end
