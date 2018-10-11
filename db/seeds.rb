# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

10.times do |index|
  loan = Loan.find(39 + index)
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
