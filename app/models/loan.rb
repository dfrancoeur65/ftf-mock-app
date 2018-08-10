class Loan < ApplicationRecord
  belongs_to :deal
  enum funding_channel: %i[crowdfund sale undefined]

  def self.loan_volume_current_month
    Loan.where(origination_date: Time.now.beginning_of_month..Time.now).sum(:contract_amount)
  end

  def self.loan_volume_current_year
    Loan.where(origination_date: Time.now.beginning_of_year..Time.now).sum(:contract_amount)
  end

  def self.ratio_loan_volume_month_to_year
    loan_volume_current_month / loan_volume_current_year.round(2).to_s
  end

  def self.percentage_loans_sold_month
    Loan.where(origination_date: Time.now.beginning_of_month..Time.now, funding_channel: 'sale').sum(:contract_amount)
  end
end
