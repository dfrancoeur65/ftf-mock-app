module Api::V1
  class PayoffsController < ApplicationController
    def index
      @payoffs = Payoff.all
      render json: @payoffs, include: [:line_items]
    end
  end
end
