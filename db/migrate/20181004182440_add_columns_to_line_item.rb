class AddColumnsToLineItem < ActiveRecord::Migration[5.1]
  def change
    add_column :line_items, :accrual_period_start, :date
    add_column :line_items, :accrual_period_end, :date
  end
end
