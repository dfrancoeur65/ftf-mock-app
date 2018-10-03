class CreateConstructionDraws < ActiveRecord::Migration[5.1]
  def change
    create_table :construction_draws do |t|
      t.decimal :amount
      t.date :processed_at
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
