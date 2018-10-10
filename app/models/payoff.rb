class Payoff < ApplicationRecord
  belongs_to :loan
  has_one :deal, through: :loan
  has_many :line_items, dependent: :destroy
  accepts_nested_attributes_for :line_items
  enum status: %i[draft sent received reviewed]

  def calculate_amount
    line_items.sum(:amount)
  end
end
