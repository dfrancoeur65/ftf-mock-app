class AddLoansData < ActiveRecord::Migration[5.1]
  def change
    60.times do |index|
      loan = Loan.new(
        deal_id: index + 1,
        contract_amount: Faker::Number.between(100, 500) * 1000,
        origination_date: Faker::Date.between(70.days.ago, Date.today),
        annual_percentage_rate: Faker::Number.between(80, 130) / 10.round(2),
        origination_fee_percentage_rate: Faker::Number.between(20, 40) / 10.round(2)
      )
      loan.save!
    end
  end
end
