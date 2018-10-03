Loan.find(20) do |loan|
  2.times do
    cd = ConstructionDraw.new
    cd.amount = loan.rehab_budget_amount * 0.2
    cd.processed_at = Faker::Date.between(3.months.ago, Date.today)
    cd.status = 'processed'
    cd.loan_id = offering.id
    cd.save!
  end
  2.times do
    invoice = Invoice.new
    invoice.loan_id = loan.id
    invoice.amount = loan.monthly_interest
    invoice.status = 'open'
    invoice.amount_due = invoice.amount
    invoice.save!
  end

  la = LoanAdjustment.new
  la.type = 'repayment'
  la.processed_at = Faker::Date.between(2.months.ago, Date.today)
  la.loan_id = loan.id
  la.amount = 30_000
  la.save!
end
