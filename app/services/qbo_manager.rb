## Service object for the QBO api

class QboManager
  def initialize
    @qbo_api = QboApi.new(token: ENV['QBO_TOKEN'],
                          token_secret: ENV['QBO_TOKEN_SECRET'],
                          realm_id: 123_145_711_297_279,
                          consumer_key: ENV['QBO_OAUTH_CONSUMER_KEY'],
                          consumer_secret: ENV['QBO_OAUTH_CONSUMER_SECRET'])
  end

  def get_customer(id)
    @qbo_api.get(:customer, id)
  end

  def get_accounts(account_name)
    @qbo_api.query(<<-SQL
                  SELECT * FROM Account where DisplayName like #{account_name}
    SQL
                  )
  end

  def create_journal_entry(_data)
    @qbo.create(:journalentry)
    journal_entry = {
      "Line": [
        {
          "Id": '0',
          "Description": 'nov portion of rider insurance',
          "Amount": 100.0,
          "DetailType": 'JournalEntryLineDetail',
          "JournalEntryLineDetail": {
            "PostingType": 'Debit',
            "AccountRef": {
              "value": '39',
              "name": 'Opening Bal Equity'
            }
          }
        },
        {
          "Description": 'nov portion of rider insurance',
          "Amount": 100.0,
          "DetailType": 'JournalEntryLineDetail',
          "JournalEntryLineDetail": {
            "PostingType": 'Credit',
            "AccountRef": {
              "value": '44',
              "name": 'Notes Payable'
            }

          }
        }
      ]
    }
  end
end
