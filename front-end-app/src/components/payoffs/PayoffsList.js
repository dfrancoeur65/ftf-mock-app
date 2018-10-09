import {connect} from 'react-redux';
import {createNewPayoff,loadPayoffs} from '../../redux/modules/PayoffsReducer';
import Payoffs from './Payoffs';
import Client from '../../api/Client';


const mapDispatchToPayoffsProps = (dispatch,props)=>(
  {
    onMount:() =>{
      Client.getAllPayoffs((payoffs)=>{
        dispatch(
          loadPayoffs(payoffs)
        )
      })
    },
    createNewPayoff:(loan_id,payoff_date) => dispatch(
      createNewPayoff(loan_id,payoff_date)
    ),
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
