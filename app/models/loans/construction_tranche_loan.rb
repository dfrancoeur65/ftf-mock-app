# This type of loan is split up into two portions, one is the portion of the loan given at close and the other is the rehab budget, which does not accrue interest until it is paid off
class ConstructionTrancheLoan < Loan
  def loan_outstanding
    contract_amount - unused_rehab
  end
end
