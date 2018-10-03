class Invoice < ApplicationRecord
  enum :status % i[open partially_paid paid cancelled]
  belongs_to :loan
end
