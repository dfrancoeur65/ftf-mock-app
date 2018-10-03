class ConstructionDraw < ApplicationRecord
  belongs_to :loan
  enum status: %i[draft reviewed processed cancelled]
end
