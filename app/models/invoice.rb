class Invoice < ApplicationRecord
  enum status: %i[draft outstanding paid cancelled]
  enum invoice_type: %i[interest late_fee extension_fee]
  belongs_to :loan
end
