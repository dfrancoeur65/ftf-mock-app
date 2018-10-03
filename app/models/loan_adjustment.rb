class LoanAdjustment < ApplicationRecord
  belongs_to :loan
  enum :type % i[loan_increase repayment]
end
