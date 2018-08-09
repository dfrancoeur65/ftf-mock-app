class AddFundingChannelToLoans < ActiveRecord::Migration[5.1]
  def change
    add_column :loans, :funding_channel, :integer, default: 1
  end
end
