module Api::V1
  class ReceivedPaymentsController < ApplicationController
    def index
      @received_payments = ReceivedPayment.all
      render json: @received_payments
    end

    def show
      @received_payment = ReceivedPayment.find(received_payment_params[:id])
      render json: @received_payment
    end

    def destroy
      @received_payment = ReceivedPayment.destroy(received_payment_params[:id])
      render json: @received_payment
    end

    def create
      @received_payment = ReceivedPayment.new(received_payment_params)
      @received_payment.save!
      render json: @received_payment
    end

    private

    def received_payment_params
      params.permit(:id, :amount, :payoff_id, :date_received)
    end
  end
end
