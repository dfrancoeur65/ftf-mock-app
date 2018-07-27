class CreateDeals < ActiveRecord::Migration[5.1]
  def change
    create_table :deals do |t|
      t.references :borrower, foreign_key: {to_table: :users}
      t.integer :status_code
      t.string :street
      t.string :city
      t.string :state
      t.string :zip_code
      t.timestamps
    end
  end
end
