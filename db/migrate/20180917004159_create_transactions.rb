class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.string :name
      t.timestamps
    end
    create_table :transactions do |t|
      t.integer :type
      t.integer :status, default: 0
      t.references :origin_account_id,
                   index: true,
                   foreign_key: { to_table: :accounts }
      t.references :destination_account_id,
                   index: true,
                   foreign_key: { to_table: :accounts }
      t.decimal :amount
      t.date :processed_date
      t.integer :status, default: 0
      t.timestamps
    end
  end
end
