import Client from '../../api/Client';

const DELETE_LINE_ITEM = 'DELETE_LINE_ITEM';
const NEW_LINE_ITEM = 'NEW_LINE_ITEM';
const RECEIVE_PAYMENT = 'RECEIVE_PAYMENT';
const LOAD_PAYOFF = 'LOAD_PAYOFF';


const EditingPayoffReducer = (
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

export function deleteLineItem(newUser){

  return {
    type:UPDATE_LINE_ITEM,
    user: newUser,
  }
}





export default EditingPayoffReducer;
