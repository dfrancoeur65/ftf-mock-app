class Deal < ApplicationRecord
  has_many :investments
  has_one :loan
  belongs_to :user, foreign_key: 'borrower_id'
end
