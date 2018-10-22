import {connect} from 'react-redux';
import {createPayoff,getPayoffs} from '../../redux/modules/PayoffsReducer';
import Payoffs from './Payoffs';



function handleNewPayoff(loan_id,payoff_date,dispatch){
  var data = {
    loan_id,
    payoff_date:payoff_date
  }
  createPayoff(data,dispatch)
}

const mapDispatchToPayoffsProps = (dispatch,props)=>(
  {
    onMount:() => getPayoffs(dispatch),
    onNewPayoff:(loan_id,payoff_date)=>handleNewPayoff(loan_id,payoff_date,dispatch),
  }
);

const mapStateToPayoffsProps = (state)=>(
  {
    payoffs:state.payoffs.data,
    headers:state.payoffs.headers,
  }
);

const PayoffsList = connect(
  mapStateToPayoffsProps,
  mapDispatchToPayoffsProps,
)(Payoffs);



export default PayoffsList;
