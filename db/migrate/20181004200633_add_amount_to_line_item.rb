class AddAmountToLineItem < ActiveRecord::Migration[5.1]
  def change
    add_column :line_items, :amount, :decimal, precision: 8, scale: 2
  end
end
