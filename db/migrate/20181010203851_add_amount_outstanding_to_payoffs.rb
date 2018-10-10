class AddAmountOutstandingToPayoffs < ActiveRecord::Migration[5.1]
  def change
    add_column :payoffs, :outstanding_amount, :decimal, precision: 8, scale: 2
  end
end
