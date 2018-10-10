class AddColumnToPayoffs < ActiveRecord::Migration[5.1]
  def change
    add_column :payoffs, :amount_received, :decimal, precision: 8, scale: 2
  end
end
