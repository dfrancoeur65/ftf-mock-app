import React from 'react';
import Humanize from 'humanize-plus';
import {Dropdown} from 'semantic-ui-react';
import {toDollar,prettyDates} from '../../helpers/formatting';
import { Link } from 'react-router-dom';



class PayoffsList extends React.Component{
  state = {
    headers:["Payoff Id","Created","Payoff Date","Title","Payoff Amount","Status","Reviewed","Current","Action"],
    payoffs:[
      {
        "amount": "237626.56",
        "created_at": "2018-10-04T22:04:46.815Z",
        "deal": {
          "borrower_id": 30,
          "city": "North Nubia",
          "created_at": "2018-07-28T20:16:14.823Z",
          "id": 24,
          "state": "Indiana",
          "street": "4934 Legros Lake",
          "updated_at": "2018-07-28T20:16:14.823Z",
          "zip_code": "35792"
        },
        "id": 12,
        "loan_id": 24,
        "payoff_date": "2018-12-04",
        "reviewed": "true",
        "status": "draft",
        "updated_at": "2018-10-04T22:04:46.876Z"
      },
    ],
  }
  render(){
    return  (
      <div>
        <h2>Payoffs</h2>
        <table className='ui celled fixed table'>
          <thead className="">
            <tr className="">
              {
                this.state.headers.map((header,index)=>(
                  <th key = {index}>
                    {header}
                  </th>
                ))
              }
            </tr>
          </thead>
          <tbody className="">
            {this.state.payoffs.map((payoff,index)=>(
              <tr
                key={payoff.id}
                >
                <td>
                  {payoff.id}
                </td>
                <td>
                  {prettyDates(payoff.created_at)}
                </td>
                <td>
                  {prettyDates(payoff.payoff_date)}
                </td>
                <td>
                  {payoff.deal.street}
                </td>
                <td>
                  {toDollar(payoff.amount)}
                </td>
                <td>
                  {payoff.status}
                </td>
                <td>
                  {payoff.reviewed ? 'Reviewed':'Not Reviewed'}
                </td>
                <td>
                  {'Yes'}
                </td>
                <td>
                  <Link className='ui button' to={`${this.props.payoffsPathname}/${payoff.id}`}>
                      View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

}

export default PayoffsList;
