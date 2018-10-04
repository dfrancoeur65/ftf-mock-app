class AddAccrualPeriodToInvoice < ActiveRecord::Migration[5.1]
  def change
    add_column :invoices, :accrual_period_start, :date
    add_column :invoices, :accrual_period_end, :date
  end
end
