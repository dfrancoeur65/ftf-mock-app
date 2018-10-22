## Payoff Model, payoffs are used to calculate how much is due at a point in time on a loan

class Payoff < ApplicationRecord
  belongs_to :loan
  has_many :received_payments
  has_one :deal, through: :loan
  has_many :line_items, dependent: :destroy

  enum status: %i[draft sent received reviewed]

  after_save :remember_to_check_status_changes
  accepts_nested_attributes_for :line_items

  def amount
    line_items.sum(:amount)
  end

  def outstanding_amount
    line_items.sum(:amount) - received_payments.sum(:amount)
  end

  private

  def remember_to_check_status_changes
    @changed_status = sent? || draft_became_sent?
  end

  def draft_became_sent?
    sent? && changed_from_drafted?
  end
end
