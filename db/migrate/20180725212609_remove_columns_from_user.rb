class RemoveColumnsFromUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :email, :string
    remove_column :users, :last_name
    remove_column :users, :first_name
    add_column :users, :name, :string
  end
end
