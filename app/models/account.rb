class Account < ApplicationRecord
  has_many :outgoing_transactions,
           class_name: 'Transaction',
           foreign_key: 'origin_account_id'
  has_many :incoming_transactions,
           class_name: 'Transaction',
           foreign_key: 'destination_account_id'
end
