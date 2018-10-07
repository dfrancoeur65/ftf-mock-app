import Client from '../../components/Client';

const UPDATE_LINE_ITEM = 'UPDATE_LINE_ITEM';
const NEW_LINE_ITEM = 'NEW_LINE_ITEM';
const UPDATE_PAYOFF = 'UPDATE_PAYOFF';
const UPDATE_PAYOFFS = 'UPDATE_PAYOFFS';


const PayoffsReducer = (
  state=[],
  action
) =>{
  switch(action.type){
    case UPDATE_PAYOFF:{

      return action.payoffs;
    }; break;
    case UPDATE_PAYOFFS:{
      return action.payoffs;
    }; break;

    default: return state;
  }
}

export default PayoffsReducer;
