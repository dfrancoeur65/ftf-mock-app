class AddColumnsToLoan < ActiveRecord::Migration[5.1]
  def change
    add_column :loans, :product, :integer
  end
end
