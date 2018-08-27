## Loan Manager to determine funding channel status

module LoanManager
  LOAN_SALE_TO_CROWDFUND_RATIO = 0.6
  ## change
  def determine_loan_funding_channel(loan_id)
    loan = Loan.find(loan_id)
    if calc_percentage_loans_sold_current_month < LOAN_SALE_TO_CROWDFUND_RATIO
      loan.funding_channel = 'sale'
    else
      loan.funding_channel = 'crowdfund'
    end
    loan.save!
  end

  def calculate_loan_volume_current_month
    Loan.where(origination_date: Time.now.beginning_of_month..Time.now).sum(:contract_amount)
  end

  def calc_monthly_loan_sold
    Loan.where(origination_date: Time.now.beginning_of_month..Time.now, funding_channel: 'sale').sum(:contract_amount)
  end

  def calculate_loan_volume_current_year
    Loan.where(origination_date: Time.now.beginning_of_year..Time.now).sum(:contract_amount)
  end

  def calc_ratio_loan_volume_month_to_year
    calculate_loan_volume_current_month / calculate_loan_volume_current_year.round(2).to_s
  end

  def calc_percentage_loans_sold_current_month
    calc_monthly_loan_sold / calculate_loan_volume_current_month
  end
end
