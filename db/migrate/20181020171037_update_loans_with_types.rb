class UpdateLoansWithTypes < ActiveRecord::Migration[5.1]
  def change
    Loan.all.each do |loan|
      if Faker::Boolean.boolean
        loan.update(type: 'AtCloseLoan')
      else
        loan.update(type: 'ConstructionTrancheLoan')
      end
    end
  end
end
