module Api::V1
  class PayoffsController < ApplicationController
    before_action :set_loan, only: %i[create]
    def index
      @payoffs = Payoff.all
      render json: @payoffs, include: %i[deal]
    end

    def show
      @payoff = Payoff.find(params[:id])
      render json: @payoff, include: %i[line_items deal loan]
    end

    def destroy
      @payoff = Payoff.destroy(params[:id])
      render json: @payoff
    end

    def create
      @payoff = @loan.create_payoff(params[:payoff_date])
      render json: @payoff, include: %i[deal]
    end

    private

    def set_loan
      @loan = Loan.find(params[:loan_id])
    end

    def payoff_params
      params.permit(:id, :loan_id, :payoff_date)
    end
  end
end
