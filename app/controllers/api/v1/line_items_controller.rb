module Api::V1
  class LineItemsController < ApplicationController
    before_action :set_line_item, only: %i[show update]

    def index
      @line_items = LineItem.all
      render json: @line_items
    end

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
      @line_item = LineItem.new(line_item_params)
      @line_item.save!
      render json: @line_item
    end

    private

    def set_line_item
      @line_item = LineItem.find(params[:id])
    end

    def line_item_params
      params.permit(:id, :payoff_id, :amount, :status, :item_type)
    end
  end
end
