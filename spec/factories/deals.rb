FactoryBot.define do
  factory :deal do
    association :borrower_id, factory: :user
    street { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state }
    zip_code { Faker::Address.zip_code }
    before(:create) do |deal|
      deal.borrower_id ||= FactoryBot.create(:user).id
    end
  end
end
