const UPDATE_PAYOFF = 'UPDATE_PAYOFF';
const SET_EDITING_PAYOFF = 'SET_EDITING_PAYOFF';


const EditingPayoffReducer = (
  state={},
  action
) =>{
  switch(action.type){
    case SET_EDITING_PAYOFF:{
      return action.payoff;
    }; break;
    case UPDATE_PAYOFF:{
      return state;
    }; break;

    default: return state;
  }
}


export function setEditingPayoff(payoff){
  return {
    type:SET_EDITING_PAYOFF,
    payoff:payoff,
  }
}

export function updateEditingPayoff(id){
  return {
    type:UPDATE_PAYOFF,
    id:id,
  }
}





export default EditingPayoffReducer;
