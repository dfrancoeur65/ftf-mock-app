class RemoveTypeFromLoanAdjustment < ActiveRecord::Migration[5.1]
  def change
    remove_column :loan_adjustments, :type
    add_column :loan_adjustments, :adjustment_type, :integer
  end
end
