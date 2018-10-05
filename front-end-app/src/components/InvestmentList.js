import React from 'react';
import Humanize from 'humanize-plus';
import {Dropdown} from 'semantic-ui-react';
import {toDollar,prettyDates} from '../helpers/formatting';



class InvestmentList extends React.Component{
  state = {
    columns:['Investment','Offering','Amount','Investment Date','Investment Status','Cancel','Refund','Invest'],
    investmentsOpenForEditing: [],
    statuses:[
      {text:"Received"},
      {text:"Invested"},
      {text:"Not Received"},
    ],
  }
  componentDidMount(){
    this.props.onMount();
  }

handleCancelledInvestment = (investment) =>{
  investment.status = 'cancelled';
  this.props.editInvestment(investment);
}

handleRefundedInvestment = (investment) =>{
  investment.status = 'refunded';
  this.props.editInvestment(investment);
}
handleInvestedInvestment = (investment) =>{
  investment.status = 'invested';
  this.props.editInvestment(investment);
}





  render(){
    return  (
        <div>
        <h2>My Investments</h2>
        <table id='investmentTable' className = 'ui celled table'>
        <thead>
        <tr>
        {
          this.state.columns.map((header, index) => (
            <th key={index}>
            {header}
            </th>
          ))
        }
        </tr>

        </thead>
        <tbody>
        {
            this.props.investments.map((investment,index) =>
                (
                  <tr
                  key={index+1}
                  >
                  <td>
                  {index+1}
                  </td>
                  <td>
                  {investment.offering.title}
                  </td>
                  <td>
                  {toDollar(investment.amount)}
                  </td>
                  <td>
                  {prettyDates(investment.created_at)}
                  </td>
                  <td style={{color:investment.status === 'cancelled' ? "red": investment.status==='refunded' ? 'blue' : 'green'}}>
                  {investment.status}
                  </td>
                  <td>
                  <div className='ui button' onClick = {()=>this.handleCancelledInvestment(investment)}>Cancel</div>
                  </td>
                  <td>
                  <div className='ui button' onClick = {()=>this.handleRefundedInvestment(investment)}>Refund</div>
                  </td>
                  <td>
                  <div className='ui button' onClick = {()=>this.handleInvestedInvestment(investment)}>Invest</div>
                  </td>
                  </tr>
                )
                )
        }
        </tbody>
        </table>

        </div>
      );
  }

}

export default InvestmentList;
