# This type of loan was the first kind offered by FTF, at close, the entire loan is accruing interest, even the rehab budget
class AtCloseLoan < Loan
  def loan_outstanding
    contract_amount
  end
end
