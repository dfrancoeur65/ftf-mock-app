# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_181_004_200_633) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'accounts', force: :cascade do |t|
    t.string 'name'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
  end

  create_table 'construction_draws', force: :cascade do |t|
    t.decimal 'amount'
    t.date 'processed_at'
    t.integer 'status', default: 0
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.bigint 'loan_id'
    t.index ['loan_id'], name: 'index_construction_draws_on_loan_id'
  end

  create_table 'deals', force: :cascade do |t|
    t.bigint 'borrower_id'
    t.string 'street'
    t.string 'city'
    t.string 'state'
    t.string 'zip_code'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['borrower_id'], name: 'index_deals_on_borrower_id'
  end

  create_table 'investments', force: :cascade do |t|
    t.float 'amount'
    t.bigint 'user_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer 'status', default: 0
    t.date 'accrual_date'
    t.bigint 'offering_id'
    t.index ['offering_id'], name: 'index_investments_on_offering_id'
    t.index ['user_id'], name: 'index_investments_on_user_id'
  end

  create_table 'invoices', force: :cascade do |t|
    t.bigint 'loan_id'
    t.decimal 'amount'
    t.decimal 'amount_due'
    t.date 'invoice_date'
    t.integer 'status'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.date 'due_date'
    t.date 'accrual_period_start'
    t.date 'accrual_period_end'
    t.integer 'invoice_type'
    t.index ['loan_id'], name: 'index_invoices_on_loan_id'
  end

  create_table 'line_items', force: :cascade do |t|
    t.bigint 'payoff_id'
    t.integer 'item_type'
    t.bigint 'invoice_id'
    t.integer 'status', default: 0
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.date 'accrual_period_start'
    t.date 'accrual_period_end'
    t.decimal 'amount', precision: 8, scale: 2
    t.index ['invoice_id'], name: 'index_line_items_on_invoice_id'
    t.index ['payoff_id'], name: 'index_line_items_on_payoff_id'
  end

  create_table 'loan_adjustments', force: :cascade do |t|
    t.decimal 'amount'
    t.date 'processed_at'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.bigint 'loan_id'
    t.integer 'adjustment_type'
    t.integer 'status', default: 0
    t.index ['loan_id'], name: 'index_loan_adjustments_on_loan_id'
  end

  create_table 'loans', force: :cascade do |t|
    t.bigint 'deal_id'
    t.decimal 'contract_amount', precision: 8, scale: 2
    t.date 'origination_date'
    t.date 'maturity_date'
    t.decimal 'annual_percentage_rate'
    t.decimal 'origination_fee_percentage_rate'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.integer 'funding_channel', default: 1
    t.integer 'status', default: 1
    t.integer 'rehab_budget_amount'
    t.integer 'product'
    t.index ['deal_id'], name: 'index_loans_on_deal_id'
  end

  create_table 'offerings', force: :cascade do |t|
    t.float 'amount'
    t.bigint 'loan_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['loan_id'], name: 'index_offerings_on_loan_id'
  end

  create_table 'payoffs', force: :cascade do |t|
    t.decimal 'amount'
    t.integer 'status', default: 0
    t.date 'payoff_date'
    t.boolean 'reviewed'
    t.bigint 'loan_id'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['loan_id'], name: 'index_payoffs_on_loan_id'
  end

  create_table 'transactions', force: :cascade do |t|
    t.integer 'type'
    t.integer 'status', default: 0
    t.bigint 'origin_account_id_id'
    t.bigint 'destination_account_id_id'
    t.decimal 'amount'
    t.date 'processed_date'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['destination_account_id_id'], name: 'index_transactions_on_destination_account_id_id'
    t.index ['origin_account_id_id'], name: 'index_transactions_on_origin_account_id_id'
  end

  create_table 'users', force: :cascade do |t|
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.string 'email'
    t.string 'name'
    t.boolean 'admin'
    t.boolean 'underwriter'
    t.boolean 'sales'
    t.boolean 'dev'
  end

  add_foreign_key 'deals', 'users', column: 'borrower_id'
  add_foreign_key 'investments', 'users'
  add_foreign_key 'loans', 'deals'
  add_foreign_key 'offerings', 'loans'
  add_foreign_key 'transactions', 'accounts', column: 'destination_account_id_id'
  add_foreign_key 'transactions', 'accounts', column: 'origin_account_id_id'
end
