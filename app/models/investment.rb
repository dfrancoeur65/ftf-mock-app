class Investment < ApplicationRecord
  belongs_to :user
  belongs_to :offering
  validates :user_id, presence: true
  enum status: %i[not_received received invested cancelled refunded]
end
