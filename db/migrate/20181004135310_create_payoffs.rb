class CreatePayoffs < ActiveRecord::Migration[5.1]
  def change
    create_table :payoffs do |t|
      t.decimal :amount
      t.integer :status, default: 0
      t.date :payoff_date
      t.boolean :reviewed
      t.references :loan, index: true
      t.timestamps
    end
  end
end
