FactoryBot.define do
  factory :invoice do
    status { 'paid' }
    amount { Faker::Number.between(1, 15) * 250 }
    processed_at do
      Faker::Date.between(5.months.ago, Date.today)
    end
    invoice_type 'normal_interest'
  end
end
