class DropColumnsFromDeal < ActiveRecord::Migration[5.1]
  def change
    remove_column :investments, :deal_id
    add_reference :investments, :offering, index: true
  end
end
