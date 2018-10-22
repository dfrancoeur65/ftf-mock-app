FactoryBot.define do
  factory :investment do
    amount { Faker::Number.between(5, 25) * 1000 }
    association :user, factory: :user
    association :offering, factory: :offering

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
      accrual_date { Faker::Date.between(Date.today.beginning_of_month, Date.today) }
    end

    trait :last_month_accrual_date do
      accrual_date { Faker::Date.between(Date.today.beginning_of_month.prev_month, Date.today.end_of_month.prev_month) }
    end

    factory :investment_invested_current_month, traits: %i[invested current_month_accrual_date]
    factory :investment_invested_previous_month, traits: %i[invested last_month_accrual_date]
    factory :new_investment_not_received, traits: %i[not_received]
  end
end
