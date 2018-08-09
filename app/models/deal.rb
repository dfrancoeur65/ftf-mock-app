class Deal < ApplicationRecord
  has_many :investments

  def current_month_deal_volume; end
end
