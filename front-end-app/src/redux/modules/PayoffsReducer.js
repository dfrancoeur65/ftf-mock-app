import Client from '../../api/Client';

const ADD_NEW_PAYOFF = 'ADD_NEW_PAYOFF';
const UPDATE_PAYOFFS = 'UPDATE_PAYOFFS';

const PayoffsReducer = (
  state=[],
  action
) =>{
  switch(action.type){
    case ADD_NEW_PAYOFF:{
      return [action.payoff,...state];
    }; break;
    case UPDATE_PAYOFFS:{
      return action.payoffs;;
    }; break;
    default: return state;
  }
}

export function addPayoff(data){
  return {
    type:ADD_NEW_PAYOFF,
    payoff: data,
  }
}

export const updatePayoffs =(payoffs)=>{
    return {
      type:UPDATE_PAYOFFS,
      payoffs:payoffs,
    }
}
export const getPayoffs = dispatch =>{
  Client.getAllPayoffs((payoffs)=>{
    dispatch(
      updatePayoffs(
        payoffs
      )
    )
  })
}

export default PayoffsReducer;
