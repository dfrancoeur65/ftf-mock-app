class CreateLineItems < ActiveRecord::Migration[5.1]
  def change
    create_table :line_items do |t|
      t.references :payoff
      t.integer :item_type
      t.references :invoice
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
