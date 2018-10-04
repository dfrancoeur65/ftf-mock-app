module Api::V1
  class DealsController < ApplicationController
    def index
      @deals = Deal.all
      @loans_funded = Loan.calculate_loan_volume_current_year
    end
  end
end
