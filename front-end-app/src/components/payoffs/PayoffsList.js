import {connect} from 'react-redux';
import {addPayoff,loadPayoffs} from '../../redux/modules/PayoffsReducer';
import Payoffs from './Payoffs';
import Client from '../../api/Client';



function createPayoff(loan_id,payoff_date,dispatch){
  var data = {
    loan_id,
    payoff_date:payoff_date
  }
  Client.createPayoff(data,(payoff)=>{
    dispatch(
      addPayoff(payoff)
    )
  })
}

const mapDispatchToPayoffsProps = (dispatch,props)=>(
  {
    onMount:() =>{
      Client.getAllPayoffs((payoffs)=>{
        dispatch(
          loadPayoffs(payoffs)
        )
      })
    },
    createPayoff:(loan_id,payoff_date)=>createPayoff(loan_id,payoff_date,dispatch),
    ...props
  }
);

const mapStateToPayoffsProps = (state)=>(
  {
    payoffs:state.payoffs,
  }
);

const PayoffsList = connect(
  mapStateToPayoffsProps,
  mapDispatchToPayoffsProps,
)(Payoffs);



export default PayoffsList;
