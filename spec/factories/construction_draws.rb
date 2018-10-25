FactoryBot.define do
  factory :construction_draw do
    association :loan, factory: :loan
    amount do
      Faker::Number.between(20, 100) * 1000
    end

    trait :processed do
      status 'processed'
      processed_at do
        Faker::Date.between(5.months.ago, Date.today)
      end
    end

    factory :processed_construction_draw,
            traits: %i[processed]
  end
end
