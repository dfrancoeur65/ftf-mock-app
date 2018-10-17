## Service object for the QBO api

class QboManager
  class<<self
    attr_accessor :qbo_api
    def post_journal_entry(data)
      @qbo_api = QboApi.new(token: ENV['QBO_TOKEN'],
                            token_secret: ENV['QBO_TOKEN_SECRET'],
                            realm_id: 123_145_711_297_279,
                            consumer_key: ENV['QBO_OAUTH_CONSUMER_KEY'],
                            consumer_secret: ENV['QBO_OAUTH_CONSUMER_SECRET'])
      @qbo_api.create(:journal_entry, payload: data)
    end

    def get_accounts(account_name)
      @qbo_api.query(<<-SQL
        SELECT * FROM Account where DisplayName like #{account_name}
      SQL
                    )
    end
  end
end
