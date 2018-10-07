module Api::V1
  class PayoffsController < ApplicationController
    def index
      @payoffs = Payoff.all
      render json: @payoffs, include: %i[deal]
    end

    def show
      @payoff = Payoff.find(params[:id])
      render json: @payoff, include: %i[line_items loan]
    end

    def destroy
      @payoff = Payoff.destroy(params[:id])
      render json: @payoff
    end

    def create
      @payoff = Payoff.new(user_params)
      @payoff.save
      render json: @payoff
    end

    private

    def payoff_params
      params.permit(:loan_id)
    end
  end
end
