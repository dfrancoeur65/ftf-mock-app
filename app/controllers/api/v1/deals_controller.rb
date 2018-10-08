module Api::V1
  class DealsController < ApplicationController
    def index
      @deals = Deal.all
      render json: @deals
    end
  end
end
