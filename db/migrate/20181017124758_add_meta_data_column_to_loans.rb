class AddMetaDataColumnToLoans < ActiveRecord::Migration[5.1]
  def change
    add_column :loans, :qbo_origination_entry, :json
  end
end
