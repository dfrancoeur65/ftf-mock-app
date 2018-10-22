class CreateOfferings < ActiveRecord::Migration[5.1]
  def change
    create_table :offerings do |t|
      t.float :amount
      t.references :loan, foreign_key: true
      t.timestamps
    end
  end
end
