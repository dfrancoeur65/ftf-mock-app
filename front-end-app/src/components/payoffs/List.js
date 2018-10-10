import React from 'react';
import {toDollar,prettyDates} from '../../helpers/formatting';
import { Link } from 'react-router-dom';



class List extends React.Component{
  state = {
    headers:["Payoff Id","Created","Payoff Date","Title","Payoff Amount","Status","Reviewed","Current","Action"],
  }

  componentDidMount() {
    this.resetComponent()
  }

  resetComponent(){
    this.props.onMount()
  }
  render(){
    const payoffs = this.props.payoffs
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
            {payoffs.length && payoffs.map((payoff,index)=>(
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
                  <Link className='ui button' to={`payoffs/${payoff.id}`}>
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

export default List;
