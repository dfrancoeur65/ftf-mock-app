module Api::V1
  class DealsController < ApplicationController
    def index
      @deals = Deal.all
      render json: @deals
    end

    def accounting
      render json: {
        deals: Deal.paginate(page: page)
                   .order(sort_by + ' ' + order),
        page: page,
        pages: Deal.pages
      }
    end

    private

    def deal_params
      params.permit(:id)
    end

    def page
      params[:page] || 1
    end

    def sort_by
      params[:sort_by] || 'id'
    end

    def order
      params[:order] || 'asc'
    end
  end
end
