class AddDueDateToInvoices < ActiveRecord::Migration[5.1]
  def change
    add_column :invoices, :due_date, :date
  end
end
