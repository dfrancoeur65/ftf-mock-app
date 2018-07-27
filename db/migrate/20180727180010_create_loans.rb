class CreateLoans < ActiveRecord::Migration[5.1]
  def change
    create_table :loans do |t|
      t.references :deal, foreign_key: true
      t.decimal :contract_amount, :precision =>8, :scale=> 2
      t.date :origination_date
      t.date :maturity_date
      t.decimal :annual_percentage_rate
      t.decimal :origination_fee_percentage_rate
      t.timestamps
    end
  end
end
