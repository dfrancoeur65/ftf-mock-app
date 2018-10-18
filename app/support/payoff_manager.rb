## Loan Manager to determine funding channel status
## Determines using current month history and construction activity
class PayoffManager
  include Days360
  class<<self
  def create_payoff(payoff_date, loan_id)
    @loan = Loan.find(loan_id)
    date = Date.parse(payoff_date)
    @payoff = @loan.payoffs.build(
      payoff_date: date
    )
    create_loan_amount_line_item
    create_unused_rehab_budget_line_item
    create_interest_line_items(date)
    create_closing_fee_line_items
    @payoff
  end

    private

  DISCHARGE_FEE = 250
  INCLUDE_DAY_OF = 1.day

  def create_loan_amount_line_item
    @payoff.line_items.build(
      amount: @loan.contract_amount,
      item_type: LineItem.item_types[:gross_loan_amount]
    )
  end

  def create_unused_rehab_budget_line_item
    @payoff.line_items.build(
      amount: @loan.unused_rehab,
      item_type: LineItem.item_types[:unused_rehab_funds],
      status: LineItem.statuses[:closed]
    )
  end

  def create_interest_line_items(date)
    create_outstanding_interest_line_items
    create_estimated_additional_interest_line_items(date)
  end

  def create_outstanding_interest_line_items
    @loan.outstanding_invoices.each do |invoice|
      @payoff.line_items.build(
        item_type: invoice.invoice_type,
        amount: invoice.amount_due,
        accrual_period_start: invoice.accrual_period_start,
        accrual_period_end: invoice.accrual_period_end,
        invoice_id: invoice.id
      )
    end
  end

  def create_estimated_additional_interest_line_items(end_date)
    start_date = Date.today.beginning_of_month

    while start_date < end_date
      if start_date.end_of_month >= end_date
        create_estimated_interest_line_item(
          start_date, end_date
        )
        start_date = end_date
      elsif start_date.end_of_month < end_date
        create_estimated_interest_line_item(
          start_date, start_date.end_of_month
        )
        start_date = start_date.end_of_month + INCLUDE_DAY_OF
      end
    end
  end

  def create_estimated_interest_line_item(start_date, end_date)
    estimated_amount = calculate_360_interest_between_two_dates(
      start_date, end_date
    )
    @payoff.line_items.build(
      item_type: LineItem.item_types[:estimated_interest],
      amount: estimated_amount,
      accrual_period_start: start_date,
      accrual_period_end: end_date
    )
  end

  def calculate_360_interest_between_two_dates(beg_date, end_date)
    num_days = days360(beg_date, end_date + INCLUDE_DAY_OF)
    num_days * @loan.daily_360_interest_amount
  end

  def create_closing_fee_line_items
    @payoff.line_items.build(
      item_type: LineItem.item_types[:discharge_fee],
      amount: DISCHARGE_FEE
    )
  end
end
end
