class AddDealSeedDataAgain < ActiveRecord::Migration[5.1]

    def change
      40.times do
        deal = Deal.new({
            borrower_id: Faker::Number.between(8,34),
            status_code: 6,

            street: Faker::Address.street_address,
            city: Faker::Address.city,
            state:Faker::Address.state,
            zip_code: Faker::Address.zip_code
          })
          deal.save!
        end

          10.times do
            deal = Deal.new({
                borrower_id: Faker::Number.between(8,34),
                status_code: 5,

                street: Faker::Address.street_address,
                city: Faker::Address.city,
                state:Faker::Address.state,
                zip_code: Faker::Address.zip_code
              })
              deal.save!
            end

            10.times do
              deal = Deal.new({
                  borrower_id: Faker::Number.between(8,34),
                  status_code: 6,

                  street: Faker::Address.street_address,
                  city: Faker::Address.city,
                  state:Faker::Address.state,
                  zip_code: Faker::Address.zip_code
                })
              deal.save!

      end
    end

end
