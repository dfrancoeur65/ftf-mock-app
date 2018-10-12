import {connect} from 'react-redux';
import {updateInvestment,setInvestments} from '../redux/modules/InvestmentsReducer';
import Client from './Client';
import InvestmentList from './InvestmentList';


const mapDispatchToInvestmentListProps = (dispatch,props)=>(
  {
    onMount:() =>Client.getInvestments(
      (investments)=>(
        dispatch(
          setInvestments(investments)
        )
      )
    ),
    editInvestment:(investment) => dispatch(
      updateInvestment(investment)
    ),

  }
);

const mapStateToInvestmentListProps = (state)=>(
  {
    investments:state.investments,
  }
);

const InvestorDashboard = connect(
  mapStateToInvestmentListProps,
  mapDispatchToInvestmentListProps,
)(InvestmentList);



export default InvestorDashboard;
