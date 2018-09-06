class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  has_many :investments
  has_many :active_investments, -> { where status: 'invested' },
           class_name: 'Investment',
           foreign_key: 'user_id'
  has_many :received_investments, -> { where status: 'received' },
           class_name: 'Investment',
           foreign_key: 'user_id'
  has_many :active_deals, through: :investments, source: :deal
end
