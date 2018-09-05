## Loan Manager to determine funding channel status

module LoanManager
  LOAN_SALE_TO_CROWDFUND_RATIO = 0.6

  def determine_next_loan_funding_channel
    consider_current_month_activity
  end

  private

  def calc_percentage_loans_sold_current_month
    Loan.originated_current_month.sold.sum(:contract_amount)\
    / Loan.originated_current_month.sum(:contract_amount)
  end

  def consider_current_month_activity
    if calc_percentage_loans_sold_current_month < LOAN_SALE_TO_CROWDFUND_RATIO
      Loan.funding_channels[:sale]
    else
      Loan.funding_channels[:crowdfund]
    end
  end
end
