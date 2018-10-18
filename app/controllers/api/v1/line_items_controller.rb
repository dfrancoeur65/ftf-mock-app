module Api::V1
  class LineItemsController < ApplicationController
    before_action :set_line_item, only: %i[show update]

    def show
      render json: @line_item
    end

    def update
      @line_item.update(line_item_params)
    end

    def destroy
      @line_item = LineItem.destroy(line_item_params[:id])
      render json: @line_item
    end

    def create
      @line_item = LineItem.create(line_item_params)
      render json: @line_item
    end

    private

    def set_line_item
      @line_item = LineItem.find(line_item_params[:id])
    end

    def line_item_params
      params.permit(:id, :payoff_id, :amount, :status, :item_type)
    end
  end
end
