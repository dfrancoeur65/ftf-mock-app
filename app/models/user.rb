class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  has_many :investments
  has_many :deals
end
