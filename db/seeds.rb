# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
30.times do
  user = User.new(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )
  user.save!
end

20.times do
  deal = Deal.new(
    borrower_id: Faker::Number.between(1, 30),
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip_code: Faker::Address.zip_code
  )
  deal.save!
end

10.times do
  deal = Deal.new(
    borrower_id: Faker::Number.between(1, 30),
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip_code: Faker::Address.zip_code
  )
  deal.save!
end

10.times do
  deal = Deal.new(
    borrower_id: Faker::Number.between(1, 30),
    street: Faker::Address.street_address,
    city: Faker::Address.city,
    state: Faker::Address.state,
    zip_code: Faker::Address.zip_code
  )
  deal.save!
end

40.times do |index|
  loan = Loan.new(
    deal_id:  1 + index,
    contract_amount: Faker::Number.between(100, 500) * 1000,
    origination_date: Faker::Date.between(70.days.ago, Date.today),
    annual_percentage_rate: Faker::Number.between(80, 130) / 1000.0,
    origination_fee_percentage_rate: Faker::Number.between(20, 40) / 10.round(2)
  )
  loan.rehab_budget_amount = Faker::Number.between(1, 5) * 0.1 * loan.contract_amount
  loan.save!
end

20.times do |index|
  loan = Loan.find(1 + index)
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

  2.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest * 0.06
    invoice.status = 'outstanding'
    invoice.invoice_type = 'late_fee'
    invoice.amount_due = invoice.amount
    invoice.accrual_period_start = Faker::Date.between(2.months.ago, 1.months.ago).beginning_of_month
    invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
    invoice.save!
  end

  next unless Faker::Boolean.boolean
  invoice = Invoice.new
  invoice.loan_id = loan.id
  invoice.amount = loan.contract_amount * 0.01
  invoice.status = 'outstanding'
  invoice.invoice_type = 'extension_fee'
  invoice.amount_due = invoice.amount
  invoice.accrual_period_start = Faker::Date.between(2.months.ago, 1.months.ago).beginning_of_month
  invoice.accrual_period_end = invoice.accrual_period_start.end_of_month
  invoice.save!
end
