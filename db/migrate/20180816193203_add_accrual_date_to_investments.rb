class AddAccrualDateToInvestments < ActiveRecord::Migration[5.1]
  def change
    add_column :investments, :accrual_date, :date
  end
end
