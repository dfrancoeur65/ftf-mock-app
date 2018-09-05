require 'rails_helper'
require 'byebug'

RSpec.describe 'Loan Model' do
  context 'after a loan is switched to closed' do
    before(:example) do
      @loan = create(:loan_closing_scheduled)
      @loan.determine_loan_funding_channel
      @loan.save!
    end
    it 'its funding channel is determined' do
      expect(@loan.funding_channel).not_to eq('undefined')
    end
  end
  context 'after a large loan is switched to closed' do
    before(:example) do
      @loan = create(:large_loan_closing_scheduled)
      @loan.determine_loan_funding_channel
      @loan.save!
    end
    it 'its funding channel is set for sale' do
      expect(@loan.funding_channel).to eq('sale')
    end
  end
  context 'after construction heavy small loan is switched to closed' do
    before(:example) do
      @loan = create(:small_construction_heavy_loan)
      @loan.determine_loan_funding_channel
      @loan.save!
    end
    it 'its funding channel is set to crowdfunding' do
      expect(@loan.funding_channel).to eq('crowdfund')
    end
  end
end
