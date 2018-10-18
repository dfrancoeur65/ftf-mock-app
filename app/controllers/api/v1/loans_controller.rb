module Api::V1
  class LoansController < ApplicationController
    def index
      @loans = Loan.all.includes(:deal)
      render json: @loans, include: %i[deal]
    end
  end
end
