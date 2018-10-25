FactoryBot.define do
  factory :loan do
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

    trait :construction_heavy do
      rehab_budget_amount do
        contract_amount *
          Faker::Number.between(6, 8) / 10
      end
    end

    trait :for_sale do
      funding_channel do
        Loan.funding_channels[:sale]
      end
    end

    trait :for_crowdfund do
      funding_channel do
        Loan.funding_channels[:crowdfund]
      end
    end

    trait :undefined_funding_channel do
      funding_channel do
        Loan.funding_channels[:undefined]
      end
    end

    trait :small_loan do
      contract_amount do
        Faker::Number.between(100, 300) * 1000
      end
    end

    trait :large_loan do
      contract_amount do
        Faker::Number.between(500, 1000) * 1000
      end
    end

    factory :small_construction_heavy_loan,
            traits: %i[small_loan
                       closing_scheduled
                       construction_heavy
                       undefined_funding_channel]
    factory :loan_closed_for_sale,
            traits: %i[closed
                       for_sale]
    factory :loan_closed_for_crowdfund,
            traits: %i[for_crowdfund
                       closed]
    factory :loan_closing_scheduled,
            traits: %i[closing_scheduled
                       small_loan
                       undefined_funding_channel]
    factory :large_loan_closing_scheduled,
            traits: %i[large_loan
                       closing_scheduled
                       undefined_funding_channel]
  end
end
