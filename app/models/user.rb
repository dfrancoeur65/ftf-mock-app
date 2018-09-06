class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  has_many :investments
  has_many :invested_deals, through: :investments, source: :deal
end
