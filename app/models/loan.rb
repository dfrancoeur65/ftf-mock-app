class Loan < ApplicationRecord
  include LoanManager

  belongs_to :deal
  enum funding_channel: %i[crowdfund sale undefined]
  enum status: %i[received under_review term_sheet closing_scheduled closed funded_off_platform fully_funded repaid]
  after_commit :set_funding_channel, if: :status_changed_to_closed

  def initialize(deal_id)
    @deal_id = deal_id
  end

  def determine_loan_funding_channel
    self.funding_channel = determine_next_loan_funding_channel
    save!
  end

  def status_changed_to_closed
    :status == 'closed' if status_changed?
  end

  scope :originated_current_month, -> { where(origination_date: Time.now.beginning_of_month..Time.now) }
  scope :sold, -> { where(funding_channel: 'sale') }
  scope :crowdfunded, -> { where(funding_channel: 'crowdfund') }
  scope :originated_current_year, -> { where(origination_date: Time.now.beginning_of_year..Time.now) }
end
