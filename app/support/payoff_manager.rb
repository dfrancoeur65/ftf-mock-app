## Loan Manager to determine funding channel status
## Determines using current month history and construction activity
require 'byebug'
module PayoffManager
  include Days360
  DISCHARGE_FEE = 250

  def create_payoff(date)
    @payoff = payoffs.build(
      payoff_date: date
    )
    create_interest_line_items(date)
    create_closing_fee_line_items
    create_unused_rehab_budget_line_item
    @payoff.amount = sum_of_line_items
    @payoff.save!
  end

  private

  def create_interest_line_items(date)
    create_outstanding_interest_line_items
    create_estimated_additional_interest_line_items(date)
  end

  def create_outstanding_interest_line_items
    outstanding_invoices.each do |invoice|
      line_item = @payoff.line_items.build(
        item_type: invoice.invoice_type,
        amount: invoice.amount_due,
        accrual_period_start: invoice.accrual_period_start,
        accrual_period_end: invoice.accrual_period_end
      )
      line_item.save!
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
        start_date = start_date.end_of_month + 1.day
      end
    end
  end

  def create_estimated_interest_line_item(start_date, end_date)
    estimated_amount = calculate_360_interest_between_two_dates(
      start_date, end_date
    )
    line_item = @payoff.line_items.build(
      item_type: LineItem.item_types[:estimated_interest],
      amount: estimated_amount,
      accrual_period_start: start_date,
      accrual_period_end: end_date
    )
    line_item.save!
  end

  def calculate_360_interest_between_two_dates(beg_date, end_date)
    num_days = days360(beg_date, end_date + 1)
    num_days * daily_360_interest_amount
  end

  def create_closing_fee_line_items
    line_item = @payoff.line_items.build(
      item_type: LineItem.item_types[:discharge_fee],
      amount: DISCHARGE_FEE
    )
    line_item.save!
  end

  def create_unused_rehab_budget_line_item
    unused_rehab = -(rehab_budget_amount -
                      processed_construction_draws.sum(:amount))
    line_item = @payoff.line_items.build(
      amount: unused_rehab,
      item_type: LineItem.item_types[:unused_rehab_funds]
    )
    line_item.save!
  end

  def sum_of_line_items
    @payoff.line_items.sum(:amount) + contract_amount
  end
end