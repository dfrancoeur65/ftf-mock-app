module Api::V1
  class ReceivedPaymentsController < ApplicationController
    after_action :recalculate_outstanding_amount, only: %i[create destroy]
    def index
      @received_payments = ReceivedPayment.all
      render json: @received_payments
    end

    def show
      @received_payment = ReceivedPayment.find(params[:id])
      render json: @received_payment
    end

    def destroy
      @received_payment = ReceivedPayment.destroy(params[:id])
      render json: @received_payment
    end

    def create
      @received_payment = ReceivedPayment.new(received_payment_params)
      @received_payment.save!
      render json: @received_payment
    end

    private

    def recalculate_outstanding_amount
      @payoff = Payoff.find(@received_payment.payoff_id)
      @payoff.outstanding_amount = @payoff.calculate_outstanding_amount
      @payoff.save!
    end

    def received_payment_params
      params.permit(:id, :amount, :payoff_id, :date_received)
    end
  end
end
