## Loan Manager to determine funding channel status
## Determines using current month history and construction activity
module LoanManager
  LOAN_SALE_TO_CROWDFUND_RATIO = 0.6
  CONSTRUCTION_LOAN_RATIO_THRESHOLD = 0.3
  LARGE_LOAN_THRESHOLD = 400_000

  def set_loan_funding_channel
    if large_loan?
      set_for_sale
    elsif construction_heavy_loan?
      set_for_crowdfunding
    else
      set_based_on_current_month_statistics
    end
  end

  private

  def set_for_crowdfunding
    assign_attributes(funding_channel: 'crowdfund')
  end

  def large_loan?
    contract_amount > LARGE_LOAN_THRESHOLD
  end

  def set_for_sale
    assign_attributes(funding_channel: 'sale')
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
      set_for_sale
    else
      set_for_crowdfunding
    end
  end
end