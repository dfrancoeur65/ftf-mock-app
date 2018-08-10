class DealsController < ApplicationController
  def index
    @deals = Deal.all
    @loans_funded = Loan.loan_volume_current_year
  end
end
