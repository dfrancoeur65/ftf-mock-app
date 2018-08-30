class AddConstructionAmounToLoan < ActiveRecord::Migration[5.1]
  def change
    add_column :loans, :rehab_budget_amount, :integer
  end
end
