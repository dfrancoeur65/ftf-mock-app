import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import PayoffsList from './PayoffsList';
import Payoff from './Payoff';


class PayoffsContainer extends Component {
  state = {
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
  render() {
    const matchPath = this.props.match.path;
    return (
      <div className='ui column'>
        <Route
          exact path = '/payoffs'
          component = {()=>(
            <PayoffsList
              payoffs={this.state.payoffs}
              />
          )}
          />
        <Route
          path={`payoffs/:payoffId`}
          render={({match})=> {
            const payoff = this.state.payoffs.find(
              (p)=> p.id===match.params.payoffId
            );
            return (
              <Payoff
                payoff={payoff}

                />
            );
          }
        }
        />
    </div>
  );
}
}


export default PayoffsContainer;
