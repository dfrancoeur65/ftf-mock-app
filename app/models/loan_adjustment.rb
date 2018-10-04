class LoanAdjustment < ApplicationRecord
  belongs_to :loan
  enum type: %i[loan_increase repayment]
  enum status: %i[not_processed processed]
end
