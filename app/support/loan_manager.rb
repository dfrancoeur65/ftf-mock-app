## Loan Manager to determine funding channel status
## Determines using current month history and construction activity
module LoanManager
  LOAN_SALE_TO_CROWDFUND_RATIO = 0.6
  CONSTRUCTION_LOAN_RATIO_THRESHOLD = 0.3
  LARGE_LOAN_THRESHOLD = 400_000

  def determine_loan_funding_channel
    if large_loan?
      'sale'
    elsif construction_heavy_loan?
      'crowdfund'
    else
      set_based_on_current_month_statistics
    end
  end

  private

  def large_loan?
    contract_amount > LARGE_LOAN_THRESHOLD
  end

  def construction_heavy_loan?
    rehab_to_loan_ratio > CONSTRUCTION_LOAN_RATIO_THRESHOLD
  end

  def rehab_to_loan_ratio
    (rehab_budget_amount || 0) / contract_amount
  end

  def calc_percentage_loans_sold_current_month
    Loan.originated_current_month.sold.sum(:contract_amount)\
    / Loan.originated_current_month.sum(:contract_amount)
  end

  def set_based_on_current_month_statistics
    if calc_percentage_loans_sold_current_month < LOAN_SALE_TO_CROWDFUND_RATIO
      'sale'
    else
      'crowdfund'
    end
  end
end
