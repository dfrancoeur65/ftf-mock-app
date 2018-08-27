class AddAdminColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :admin, :boolean
    add_column :users, :underwriter, :boolean
    add_column :users, :sales, :boolean
    add_column :users, :dev, :boolean
  end
end
