class Deal < ApplicationRecord
  has_many :investments
  has_one :loan
  belongs_to :user, foreign_key: 'borrower_id'
  has_many :active_investments, -> { where status: 'invested' },
           class_name: 'Investment',
           foreign_key: 'deal_id'
  has_many :received_investments, -> { where status: 'received' },
           class_name: 'Investment',
           foreign_key: 'deal_id'
  has_many :investors, through: :investments, source: :user
  has_many :active_investors, through: :active_investments, source: :user
end
