FactoryBot.define do
  factory :loan do
    contract_amount { Faker::Number.between(100, 500) * 1000 }
    origination_date { Faker::Date.between(70.days.ago, Date.today) }
    annual_percentage_rate { Faker::Number.between(80, 130) / 10 }
    origination_fee_percentage_rate { Faker::Number.between(20, 30) / 10 }
    association :deal, factory: :deal

    trait :closing_scheduled do
      status 'closing_scheduled'
    end

    trait :closed do
      status 'closed'
    end

    trait :for_sale do
      funding_channel 'sale'
    end

    trait :for_crowdfund do
      funding_channel 'crowdfund'
    end

    factory :loan_closed_for_sale, traits: %i[closed for_sale]
    factory :loan_closed_for_crowdfund, traits: %i[for_crowdfund closed]
    factory :loan_closing_scheduled, traits: [:closing_scheduled]
  end
end
