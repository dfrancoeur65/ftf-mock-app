class CreateInvoices < ActiveRecord::Migration[5.1]
  def change
    create_table :invoices do |t|
      t.references :loan, index: true
      t.decimal :amount
      t.decimal :amount_due
      t.date :invoice_date
      t.integer :type
      t.integer :status
      t.timestamps
    end
  end
end
