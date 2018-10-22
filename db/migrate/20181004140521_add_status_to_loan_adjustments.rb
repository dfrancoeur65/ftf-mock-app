class AddStatusToLoanAdjustments < ActiveRecord::Migration[5.1]
  def change
    add_column :loan_adjustments, :status, :integer, default: 0
  end
end
