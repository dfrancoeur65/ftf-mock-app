FactoryBot.define do
  factory :user do
    name { Faker::FunnyName.two_word_name }
    email { Faker::Internet.email }
  end
end
