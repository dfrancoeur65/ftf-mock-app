class LineItem < ApplicationRecord
  belongs_to :payoff
  has_one :invoice
  enum status: %i[outstanding closed]
  enum item_type: %i[legal_fee
                     loan_fee
                     discharge_fee
                     normal_interest
                     penalty_interest
                     late_fee
                     extension_fee
                     unused_deferred_interest
                     unused_rehab_funds
                     estimated_interest]
end
