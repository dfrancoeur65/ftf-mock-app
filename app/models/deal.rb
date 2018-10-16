class Deal < ApplicationRecord
  has_many :investments
  has_one :loan
  belongs_to :user, foreign_key: 'borrower_id'
  has_many :active_investments, -> { where status: 'invested' },
           class_name: 'Investment',
           foreign_key: 'deal_id'
  has_many :received_investments, -> { where status: 'received' },
           class_name: 'Investment',
           foreign_key: 'deal_id'
  has_many :investors, through: :investments, source: :user
  has_many :active_investors, through: :active_investments, source: :user

  class << self
    def per_page
      10
    end

    def pages(per_page = self.per_page)
      pages = count / per_page.to_f
      pages += 1 if pages % 1 > 0
      pages.to_i
    end

    def paginate(page: 1, per_page: self.per_page)
      page = page.to_i
      per_page = per_page.to_i
      offset = (page - 1) * per_page
      limit(per_page).offset(offset)
    end
  end
end
