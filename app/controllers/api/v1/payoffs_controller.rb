module Api::V1
  class PayoffsController < ApplicationController
    def index
      @payoffs = Payoff.all
      render json: @payoffs.to_json(
        methods: %i[amount outstanding_amount],
        include: %i[deal]
      )
    end

    def show
      @payoff = Payoff.find(payoff_params[:id])
      render json: @payoff.to_json(
        methods: %i[amount outstanding_amount],
        include: %i[line_items deal loan received_payments]
      )
    end

    def destroy
      @payoff = Payoff.destroy(payoff_params[:id])
      render json: @payoff
    end

    def create
      @payoff = PayoffManager.create_payoff(
        payoff_params[:payoff_date],
        payoff_params[:loan_id]
      )
      @payoff.save!
      render json: @payoff.to_json(
        methods: %i[amount outstanding_amount],
        include: %i[deal]
      )
    end

    def update
      @payoff = Payoff.find(payoff_params[:id])
      @payoff.update(payoff_params)
      @payoff.save!
      render json: @payoff, include: %i[deal]
    end

    private

    def payoff_params
      params.permit(:id, :status, :loan_id, :payoff_date)
    end
  end
end
