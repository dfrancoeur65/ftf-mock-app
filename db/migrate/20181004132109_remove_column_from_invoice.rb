class RemoveColumnFromInvoice < ActiveRecord::Migration[5.1]
  def change
    remove_column :invoices, :type
    add_column :invoices, :invoice_type, :integer
  end
end
