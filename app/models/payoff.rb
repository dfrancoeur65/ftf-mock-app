class Payoff < ApplicationRecord
  belongs_to :loan
  has_one :deal, through: :loan
  has_many :line_items, dependent: :destroy
  accepts_nested_attributes_for :line_items
end
