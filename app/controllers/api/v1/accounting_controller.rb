module Api::V1
  class AccountingController < ApplicationController
    def create
      JournalEntryCreator.create_origination_entry_later(deal_params[:id])
      render json: {
        status: 200,
        message: 'Journal Entry is queued for creation'
      }
    end
end
end
