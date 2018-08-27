require 'rails_helper'
require 'byebug'

RSpec.describe 'Investment Model' do
  context 'when investment created' do
    before(:example) do
      @investment = create(:new_investment_not_received)
    end
    it 'status is not received ' do
      expect(@investment.status).to eq('not_received')
    end
  end
end
