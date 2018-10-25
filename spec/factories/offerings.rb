FactoryBot.define do
  factory :offering do
    association :loan_id, factory: :loan
    before(:create) do |offering|
      offering.loan_id ||= FactoryBot.create(
        :small_construction_heavy_loan
      ).id
      offering.amount ||= offering.loan.contract_amount
    end
  end
end
