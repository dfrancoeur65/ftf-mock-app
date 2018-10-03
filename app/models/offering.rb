class Offering < ApplicationRecord
  has_one :loan
  has_many :investments
  has_many :invested_investments, -> { where status: 'invested' },
           class_name: 'Investment',
           foreign_key: 'offering_id'
  has_many :processed_transactions, -> { where status: 'processed' }
  has_many :transactions

  def funds_available
    amount - invested_investments.sum(:amount)
  end
end
