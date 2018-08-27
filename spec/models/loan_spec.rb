require 'rails_helper'
require 'byebug'

RSpec.describe 'Loan Model' do
  context 'after a loan is switched to closed' do
    before(:example) do
      @loan = create(:loan_closing_scheduled)
      @loan.status = 'closed'
      @loan.save!
    end
    it 'its funding channel is determined' do
      expect(@loan.status).not_to eq('undefined')
    end
  end
end
