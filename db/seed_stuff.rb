Loan.find(20) do |loan|
  2.times do
    cd = ConstructionDraw.new
    cd.amount = loan.rehab_budget_amount * 0.2
    cd.processed_at = Faker::Date.between(3.months.ago, Date.today)
    cd.status = 'processed'
    cd.loan_id = loan.id
    cd.save!
  end
  2.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest
    invoice.status = 'paid'
    invoice.amount_due = invoice.amount
    invoice.save!
  end

  2.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest
    invoice.status = 'outstanding'
    invoice.type = 'interest'
    invoice.amount_due = 0
    invoice.accrual_period_start = Faker::Date.between(5.months.ago, 3.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save
  end

  2.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest
    invoice.status = 'outstanding'
    invoice.type = 'interest'
    invoice.amount_due = 0
    invoice.accrual_period_start = Faker::Date.between(2.months.ago, 1.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save
  end

  1.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest
    invoice.status = 'outstanding'
    invoice.type = 'late_fee'
    invoice.amount_due = 0
    invoice.accrual_period_start = Faker::Date.between(2.months.ago, 1.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save
  end

  la = LoanAdjustment.new
  la.adjustment_type = 'repayment'
  la.processed_at = Faker::Date.between(2.months.ago, Date.today)
  la.loan_id = loan.id
  la.amount = 30_000
  la.save!
end
