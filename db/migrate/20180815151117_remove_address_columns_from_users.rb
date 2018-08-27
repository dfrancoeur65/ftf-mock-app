class RemoveAddressColumnsFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :city
    remove_column :users, :street_address
    remove_column :users, :zip_code
    remove_column :users, :state
  end
end
