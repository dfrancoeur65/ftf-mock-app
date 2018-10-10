module Api::V1
  class LineItemsController < ApplicationController
    before_action :set_line_item, only: %i[show update]
    after_action :recalculate_payoff_amount, only: %i[create destroy update]
    after_action :recalculate_outstanding_amount, only: %i[create destroy]

    def index
      @line_items = LineItem.all
      render json: @line_items
    end

    def show
      render json: @line_item
    end

    def update
      @line_item.update(line_item_params)
      @line_item.save!
    end

    def destroy
      @line_item = LineItem.destroy(params[:id])
      render json: @line_item
    end

    def create
      @line_item = LineItem.new(line_item_params)
      @line_item.save!
      render json: @line_item
    end

    private

    def set_line_item
      @line_item = LineItem.find(params[:id])
    end

    def recalculate_payoff_amount
      @payoff = Payoff.find(@line_item.payoff_id)
      @payoff.amount = @payoff.calculate_amount
      @payoff.save!
    end

    def recalculate_outstanding_amount
      @payoff = Payoff.find(@line_item.payoff_id)
      @payoff.outstanding_amount = @payoff.calculate_outstanding_amount
      @payoff.save!
    end

    def line_item_params
      params.permit(:id, :payoff_id, :amount, :status, :item_type)
    end
  end
end
