class RemoveColumnFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :address
    add_column :users, :city, :string
    add_column :users, :street_name, :string
    add_column :users, :street_address, :string
    add_column :users, :zip_code, :string
    add_column :users, :state, :string 
  end
end
