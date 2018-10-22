class CreateReceivedPayments < ActiveRecord::Migration[5.1]
  def change
    create_table :received_payments do |t|
      t.decimal :amount, precision: 8, scale: 2
      t.date :date_received
      t.references :payoff
      t.timestamps
    end
  end
end
