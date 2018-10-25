require 'rails_helper'

RSpec.describe 'Loan Model' do
  context 'when a loans unused rehab is calculated' do
    before(:example) do
      @loan = create(:small_construction_heavy_loan)
      2.times do
        @loan.construction_draws.create(
          attributes_for(
            :processed_construction_draw
          )
        )
      end
    end
    it 'it is equal to the rehab total less the processed construction draws' do
      expect(@loan.unused_rehab).to eq(
        @loan.rehab_budget_amount -
        @loan.processed_construction_draws.sum(
          :amount
        )
      )
    end
  end

  context 'after a loan is switched from closing scheduled to closed' do
    before(:example) do
      @loan = create(:loan_closing_scheduled)
      @loan.update(status: 'closed')
    end
    it 'its funding channel is determined' do
      expect(@loan.funding_channel).not_to eq('undefined')
    end
  end
  context 'after a large loan is switched from closing scheduled to closed' do
    before(:example) do
      @loan = create(:large_loan_closing_scheduled)
      @loan.update(status: 'closed')
    end
    it 'its funding channel is set for sale' do
      expect(@loan.funding_channel).to eq('sale')
    end
  end
  context 'after construction heavy small loan is switched from closing scheduled to closed' do
    before(:example) do
      @loan = create(:small_construction_heavy_loan)
      @loan.update(status: 'closed')
    end
    debugger
    it 'its funding channel is set to crowdfunding' do
      expect(@loan.funding_channel).to eq('crowdfund')
    end
  end
end
