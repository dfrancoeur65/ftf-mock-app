## Loan Manager to determine funding channel status
## Determines using current month history and construction activity
require 'byebug'
module PayoffManager
  include Days360
  DISCHARGE_FEE = 250

  def create_payoff(date = Date.today)
    date = Date.parse(date)
    payoff = Payoff.new
    payoff.loan_id = id
    outstanding_interest_total = calculate_interest_outstanding_total

    estimated_interest_total = estimate_additional_interest_total(Date.today, date)
    payoff.amount = (
      contract_amount +
      outstanding_interest_total +
      estimated_interest_total +
      DISCHARGE_FEE
    ).round(2)
    payoff.payoff_date = date
    payoff
  end

  private

  def calculate_interest_outstanding_total
    outstanding_invoices.sum(:amount_due)
  end

  def estimate_additional_interest_total(beg_date, end_date = 10.days.from_now)
    num_days = days360(beg_date, end_date)

    num_days * daily_360_interest_amount
  end
end
