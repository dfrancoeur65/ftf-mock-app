class User < ApplicationRecord
  validates :name, presence: true
  validates :email, presence: true
  has_many :investments
  has_many :created_deals, :foreign_key =>'borrower_id'



end
