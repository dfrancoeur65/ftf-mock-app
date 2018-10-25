class JournalEntryCreator
  class<<self
    def create_origination_entry(*args)
      new.create_origination_entry(*args)
    end
  end

  include PerformLater
  perform_later :create_origination_entry
  def create_origination_entry(deal_id)
    loan = Deal.find(deal_id).loan
    journal_entry = populate_journal_entry(loan)
    posted_je = QboManager.post_journal_entry(journal_entry)
    loan.update(qbo_origination_entry: posted_je)
  end

  def populate_journal_entry(data)
    {
      "Line": [
        {
          "Id": '0',
          "Description": 'origination for loan',
          "Amount": data.contract_amount.to_digits,
          "DetailType": 'JournalEntryLineDetail',
          "JournalEntryLineDetail": {
            "PostingType": 'Debit',
            "AccountRef": {
              "value": AccountingAccounts::COLLATERALIZED_RE_LOANS.to_s
            }
          }
        },
        {
          "Description": 'origination for loan',
          "Amount": data.contract_amount.to_digits,
          "DetailType": 'JournalEntryLineDetail',
          "JournalEntryLineDetail": {
            "PostingType": 'Credit',
            "AccountRef": {
              "value": AccountingAccounts::CHECKING.to_s
            }
          }
        }
      ]
    }
  end

  def create_journal_entry_wip(data)
    je_data = [
      { account_no: AccountingAccounts::COLLATERALIZED_RE_LOANS.to_s,
        posting_type: 'Debit',
        amount: data.contract_amount,
        description: "Loan origination for Loan: #{data.id}" },
      { account_no: AccountingAccounts::COLLATERALIZED_RE_LOANS.to_s,
        posting_type: 'Debit',
        amount: data.contract_amount,
        description: "Loan origination for Loan: #{data.id}" }
    ]
  end
end
