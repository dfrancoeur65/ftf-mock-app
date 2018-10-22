class Invoice < ApplicationRecord
  enum status: %i[draft outstanding paid cancelled]
  enum invoice_type: %i[normal_interest
                        late_fee
                        extension_fee
                        penalty_interest]
  belongs_to :loan
end
