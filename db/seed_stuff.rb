Loan.find(1) do |loan|
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
    invoice.invoice_type = 'normal_interest'
    invoice.amount_due = invoice.amount
    invoice.save!
  end

  2.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest
    invoice.status = 'outstanding'
    invoice.invoice_type = 'normal_interest'
    invoice.amount_due = invoice.amount
    invoice.accrual_period_start = Faker::Date.between(5.months.ago, 3.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save!
  end

  2.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest
    invoice.status = 'outstanding'
    invoice.invoice_type = 'normal_interest'
    invoice.amount_due = invoice.amount
    invoice.accrual_period_start = Faker::Date.between(2.months.ago, 1.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save!
  end

  1.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest * 0.006
    invoice.status = 'outstanding'
    invoice.invoice_type = 'late_fee'
    invoice.amount_due = invoice.amount
    invoice.accrual_period_start = Faker::Date.between(2.months.ago, 1.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save!
  end

  if Faker::Boolean.boolean
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest * 0.01
    invoice.status = 'outstanding'
    invoice.invoice_type = 'extension_fee'
    invoice.amount_due = invoice.amount
    invoice.accrual_period_start = Faker::Date.between(2.months.ago, 1.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save!
  end

  la = LoanAdjustment.new
  la.adjustment_type = 'repayment'
  la.processed_at = Faker::Date.between(2.months.ago, Date.today)
  la.loan_id = loan.id
  la.amount = 30_000
  la.save!
end

20.times do
  User.create(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    street_address: Faker::Address.street_address,
    zip_code: Faker::Address.zip_code,
    state: Faker::Address.state,
    city: Faker::Address.city
  )
end
