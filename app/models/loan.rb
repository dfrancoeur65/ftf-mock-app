## Loan model
class Loan < ApplicationRecord
  include LoanManager

  belongs_to :deal

  scope :loans_in_close, -> { where(status: :closed) }
  scope :originated_today, -> { where(origination_date: Date.now) }
  scope :originated_current_month, lambda {
                                     where(origination_date:
                                       Time.now.beginning_of_month..Time.now)
                                   }
  scope :sold, -> { where(funding_channel: 'sale') }
  scope :crowdfunded, -> { where(funding_channel: 'crowdfund') }
  scope :originated_current_year, lambda {
                                    where(origination_date:
                                      Time.now.beginning_of_year..Time.now)
                                  }
  enum funding_channel: %i[crowdfund sale undefined]
  enum status: %i[received under_review term_sheet
                  closing_scheduled closed funded_off_platform
                  fully_funded repaid]

  after_commit :determine_loan_funding_channel, if: :status_changed_to_closed

  def determine_loan_funding_channel
    set_loan_funding_channel
    save!
  end

  private

  def status_changed_to_closed
    closed?
  end
end
