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

ActiveRecord::Schema.define(version: 20_180_816_193_203) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

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
    t.bigint 'deal_id'
    t.integer 'status', default: 0
    t.date 'accrual_date'
    t.index ['deal_id'], name: 'index_investments_on_deal_id'
    t.index ['user_id'], name: 'index_investments_on_user_id'
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
    t.index ['deal_id'], name: 'index_loans_on_deal_id'
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
end
