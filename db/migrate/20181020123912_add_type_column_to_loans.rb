class AddTypeColumnToLoans < ActiveRecord::Migration[5.1]
  def change
    add_column :loans, :type, :string
  end
end
