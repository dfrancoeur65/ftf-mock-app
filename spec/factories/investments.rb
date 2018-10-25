FactoryBot.define do
  factory :investment do
    association :user, factory: :user
    association :offering, factory: :offering
    amount { Faker::Number.between(1, 10) * 1000 }

    trait :invested do
      status 'invested'
    end

    trait :received do
      status 'received'
    end

    trait :not_received do
      status 'not_received'
    end

    trait :current_month_accrual_date do
      accrual_date do
        Faker::Date.between(
          Date.today.beginning_of_month,
          Date.today
        )
      end
    end

    trait :last_month_accrual_date do
      accrual_date do
        Faker::Date.between(
          Date.today.beginning_of_month.prev_month,
          Date.today.end_of_month.prev_month
        )
      end
    end

    factory :investment_invested_current_month,
            traits: %i[invested
                       current_month_accrual_date]
    factory :investment_invested_previous_month,
            traits: %i[invested
                       last_month_accrual_date]
    factory :new_investment_not_received,
            traits: %i[not_received]
  end
end
