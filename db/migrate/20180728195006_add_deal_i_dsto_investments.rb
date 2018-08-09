class AddDealIDstoInvestments < ActiveRecord::Migration[5.1]
  def change
    add_reference :investments, :deal, index:true 
  end
end
