class ChangeAmountToDecimalOnOfferings < ActiveRecord::Migration[5.1]
  def change
    change_column :offerings, :amount, :decimal, precision: 15, scale: 2, null: false
  end
end
