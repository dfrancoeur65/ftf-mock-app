class InvestmentsController < ApplicationController
  def index
    @investments = Investment.order('amount DESC')
  end
    end
