import React from 'react';
import {toDollar,prettyDates,snakeCaseToRegular} from '../../helpers/formatting';
import { Link } from 'react-router-dom';
import {Loader} from 'semantic-ui-react';



class List extends React.Component{
  state = {
    headers:["Payoff Id","Created","Payoff Date","Title","Payoff Amount","Status","Current","Action"],
  }

  componentDidMount() {
    this.resetComponent()
  }

  resetComponent(){
    this.props.onMount()
  }
  render(){
    const payoffs = this.props.payoffs
    return  !payoffs.length ? (
      <Loader active inline='centered'/>
    ):(
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
                <td style={{color:payoff.status === 'draft' ? "blue": payoff.status==='sent' ? 'orange' : 'green'}}>
                  {snakeCaseToRegular(payoff.status)}
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
