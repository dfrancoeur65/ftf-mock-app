module Api::V1
  class LineItemsController < ApplicationController
    before_action :set_payoff, only: %i[create destroy index]
    before_action :recalculate_payoff_amount, only: %i[show update destroy create]
    after_action :recalculate_payoff_amount, only: %i[create destroy update]
    def index
      @line_items = @payoff.line_items
      render json: @line_items
    end

    def show
      @line_item = LineItem.find(params[:id])
      render json: @line_item
    end

    def update
      @line_item = LineItem.find(params[:id])
      @line_item.update(line_item_params)
      @line_item.save!
    end

    def destroy
      @line_item = LineItem.destroy(params[:id])
      render json: @line_item
    end

    def create
      @line_item = @payoff.line_items.build(line_item_params)
      @line_item.save!
      render json: @payoff, include: %i[deal]
    end

    private

    def set_payoff
      @payoff = Payoff.find(params[:payoff_id])
    end

    def recalculate_payoff_amount
      @payoff.amount = @payoff.calulcate_amount
      @payoff.save!
    end

    def line_item_params
      params.permit(:id, :payoff_id, :amount, :status, :item_type)
    end
  end
end
