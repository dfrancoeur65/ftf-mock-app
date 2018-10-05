import React from 'react';
import Humanize from 'humanize-plus';
import {Dropdown} from 'semantic-ui-react';
import {toDollar,prettyDates} from '../helpers/formatting';



class Payoffs extends React.Component{
  state = {
    payoffs:[
      {
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
                "invoice_id": null,
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
                "invoice_id": null,
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
                "invoice_id": null,
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
                "invoice_id": null,
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
        "loan_id": 24,
        "payoff_date": "2018-12-04",
        "reviewed": null,
        "status": 0,
        "updated_at": "2018-10-04T22:04:46.876Z"
    },
  ],
  }
  render(){
    return  (
        <div>
        <h2>Payoffs</h2>
          {
            this.state.payoffs.map((payoff, index)=>(
              <div className = 'ui card' key={index}>
                <div className = 'content'>
                  <div className = 'header'>
                    {payoff.amount}
                  </div>
                </div>
              </div>
            ))
          }

        </div>
      );
  }

}

export default Payoffs;
