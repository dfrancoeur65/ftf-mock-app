const ExamplePayoff = {
    "amount": "237626.56",
    "created_at": "2018-10-04T22:04:46.815Z",
    "id": 12,
    "line_items": [
        {
            "accrual_period_end": "2018-05-31",
            "accrual_period_start": "2018-05-01",
            "amount": "1968.5",
            "created_at": "2018-10-04T22:04:46.817Z",
            "id": 81,
            "invoice_id": null,
            "item_type": "normal_interest",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.817Z"
        },
        {
            "accrual_period_end": "2018-06-30",
            "accrual_period_start": "2018-06-01",
            "amount": "1968.5",
            "created_at": "2018-10-04T22:04:46.822Z",
            "id": 82,
            "invoice_id": null,
            "item_type": "normal_interest",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.822Z"
        },
        {
            "accrual_period_end": "2018-08-31",
            "accrual_period_start": "2018-08-01",
            "amount": "1968.5",
            "created_at": "2018-10-04T22:04:46.827Z",
            "id": 83,
            "invoice_id": 2222,
            "item_type": "normal_interest",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.827Z"
        },
        {
            "accrual_period_end": "2018-08-31",
            "accrual_period_start": "2018-08-01",
            "amount": "1968.5",
            "created_at": "2018-10-04T22:04:46.846Z",
            "id": 84,
            "invoice_id": 5798,
            "item_type": "normal_interest",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.846Z"
        },
        {
            "accrual_period_end": "2018-08-31",
            "accrual_period_start": "2018-08-01",
            "amount": "1968.5",
            "created_at": "2018-10-04T22:04:46.853Z",
            "id": 85,
            "invoice_id": 2345,
            "item_type": "late_fee",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.853Z"
        },
        {
            "accrual_period_end": "2018-10-31",
            "accrual_period_start": "2018-10-01",
            "amount": "1968.6",
            "created_at": "2018-10-04T22:04:46.856Z",
            "id": 86,
            "invoice_id": 3471,
            "item_type": "estimated_interest",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.856Z"
        },
        {
            "accrual_period_end": "2018-11-30",
            "accrual_period_start": "2018-11-01",
            "amount": "1968.6",
            "created_at": "2018-10-04T22:04:46.860Z",
            "id": 87,
            "invoice_id": null,
            "item_type": "estimated_interest",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.860Z"
        },
        {
            "accrual_period_end": "2018-12-04",
            "accrual_period_start": "2018-12-01",
            "amount": "196.86",
            "created_at": "2018-10-04T22:04:46.865Z",
            "id": 88,
            "invoice_id": null,
            "item_type": "estimated_interest",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.865Z"
        },
        {
            "accrual_period_end": null,
            "accrual_period_start": null,
            "amount": "250.0",
            "created_at": "2018-10-04T22:04:46.867Z",
            "id": 89,
            "invoice_id": null,
            "item_type": "discharge_fee",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.867Z"
        },
        {
            "accrual_period_end": null,
            "accrual_period_start": null,
            "amount": "-30600.0",
            "created_at": "2018-10-04T22:04:46.872Z",
            "id": 90,
            "invoice_id": null,
            "item_type": "unused_rehab_funds",
            "payoff_id": 12,
            "status": "outstanding",
            "updated_at": "2018-10-04T22:04:46.872Z"
        }
    ],
    "deal":{
          "borrower_id": 22,
          "city": "South Jammie",
          "created_at": "2018-07-28T20:16:14.844Z",
          "loan_id": 36,
          "state": "Nevada",
          "street": "101 Braun Burgs",
          "updated_at": "2018-07-28T20:16:14.844Z",
          "zip_code": "59644"
      },
    "loan": {
        "annual_percentage_rate": "0.093",
        "contract_amount": "254000.0",
        "created_at": "2018-08-09T16:12:21.837Z",
        "deal_id": 24,
        "funding_channel": "sale",
        "id": 24,
        "maturity_date": null,
        "origination_date": "2018-07-04",
        "origination_fee_percentage_rate": "2.5",
        "product": null,
        "rehab_budget_amount": 51000,
        "status": "closed",
        "updated_at": "2018-10-04T12:23:17.086Z"
    },
    "loan_id": 24,
    "payoff_date": "2018-12-04",
    "reviewed": null,
    "status": 0,
    "updated_at": "2018-10-04T22:04:46.876Z"
}

export default ExamplePayoff;
