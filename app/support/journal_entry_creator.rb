class JournalEntryCreator
  class<<self
    include Sidekiq::Worker
    def perform_async(deal_id)
      loan = Deal.find(deal_id).loan
      journal_entry = create_origination_entry(loan)
      posted_je = QboManager.post_journal_entry(journal_entry)
      loan.update(qbo_origination_entry: posted_je)
    end

    def create_origination_entry(data)
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
end
