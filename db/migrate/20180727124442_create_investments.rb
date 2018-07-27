class CreateInvestments < ActiveRecord::Migration[5.1]
  def change
    create_table :investments do |t|
      t.float :amount
      t.references :user, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
