module Api::V1
  class PayoffsController < ApplicationController
    before_action :set_loan, only: %i[create]
    def index
      @payoffs = Payoff.all
      render json: @payoffs.to_json(methods: %i[amount outstanding_amount],
                                    include: %i[deal])
    end

    def show
      @payoff = Payoff.find(payoff_params[:id])
      render json: @payoff.to_json(methods: %i[amount outstanding_amount],
                                   include: %i[line_items deal loan received_payments])
    end

    def destroy
      @payoff = Payoff.destroy(payoff_params[:id])
      render json: @payoff
    end

    def create
      @payoff = @loan.create_payoff(payoff_params[:payoff_date])
      @payoff.save!
      render json: @payoff.to_json(methods: %i[amount outstanding_amount],
                                   include: %i[deal])
    end

    def update
      @payoff = Payoff.find(payoff_params[:id])
      @payoff.update(payoff_params)
      @payoff.save!
      render json: @payoff, include: %i[deal]
    end

    private

    def set_loan
      @loan = Loan.find(payoff_params[:loan_id])
    end

    def payoff_params
      params.permit(:id, :status, :loan_id, :payoff_date)
    end
  end
end
