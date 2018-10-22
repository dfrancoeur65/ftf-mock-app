## Loan model
class Loan < ApplicationRecord
  belongs_to :deal
  has_many :payoffs
  has_many :loan_adjustments
  has_many :construction_draws
  has_many :invoices
  has_many :processed_construction_draws, -> { where status: 'processed' },
           class_name: 'ConstructionDraw',
           foreign_key: 'loan_id'
  has_many :processed_repayments, -> { where(status: 'processed') },
           class_name: 'LoanAdjustment',
           foreign_key: 'loan_id'
  has_many :outstanding_invoices, -> { where(status: 'outstanding') },
           class_name: 'Invoice',
           foreign_key: 'loan_id'
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
  # scope :outstanding_invoices, -> { where status: 'outstanding' },
  #       class_name: 'Invoice',
  #       foreign_key: 'loan_id'

  enum funding_channel: %i[crowdfund sale undefined]
  enum product: %i[at_close construction_tranche]
  enum status: %i[received under_review term_sheet
                  closing_scheduled closed funded_off_platform
                  fully_funded repaid]

  # after_commit :determine_loan_funding_channel, if: :status_changed_to_closed
  include LoanManager

  def determine_loan_funding_channel
    set_loan_funding_channel
    save!
  end

  def unused_rehab
    rehab_budget_amount - processed_construction_draws.sum(:amount)
  end

  def loan_outstanding
    if product == 'construction_tranche'
      contract_amount - unused_rehab
    elsif product == 'at_close'
      contract_amount
    else
      contract_amount
    end
  end

  def monthly_interest
    (loan_outstanding * annual_percentage_rate / 12).round(2)
  end

  def daily_360_interest_amount
    (loan_outstanding * annual_percentage_rate / 360).round(2)
  end

  private

  def status_changed_to_closed
    closed?
  end
end
