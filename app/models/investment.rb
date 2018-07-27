class Investment < ApplicationRecord
  belongs_to :user
  belongs_to :deal
  validates :user_id, presence:true
  validates :amount, presence:true
end
