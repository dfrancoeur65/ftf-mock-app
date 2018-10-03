class CreateLoanAdjustments < ActiveRecord::Migration[5.1]
  def change
    create_table :loan_adjustments do |t|
      t.decimal :amount
      t.date :processed_at
      t.integer :type
      t.timestamps
    end
  end
end
