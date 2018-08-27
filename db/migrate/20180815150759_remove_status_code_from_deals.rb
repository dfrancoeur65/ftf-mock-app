class RemoveStatusCodeFromDeals < ActiveRecord::Migration[5.1]
  def change
    remove_column :deals, :status_code
  end
end
