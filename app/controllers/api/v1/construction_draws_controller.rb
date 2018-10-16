module Api::V1
  class ConstructionDrawsController < ApplicationController
    def index
      render json: {
        construction_draws: ConstructionDraw.paginate(page: page)
                                            .order(sort_by + ' ' + order),
        page: page,
        pages: ConstructionDraw.pages
      }
    end

    private

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
