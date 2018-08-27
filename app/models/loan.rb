class Loan < ApplicationRecord
  extend LoanManager
  belongs_to :deal
  enum funding_channel: %i[crowdfund sale undefined]
  enum status: %i[received under_review term_sheet closing_scheduled closed funded_off_platform fully_funded repaid]
  after_commit :set_funding_channel, if: :status_changed_to_closed

  def set_funding_channel
    Loan.determine_loan_funding_channel(id)
  end

  def status_changed_to_closed
    status == 'closed' if status_changed?
  end
end
