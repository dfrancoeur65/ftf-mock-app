import Client from '../../api/Client';

const DELETE_LINE_ITEM = 'DELETE_LINE_ITEM';
const NEW_LINE_ITEM = 'NEW_LINE_ITEM';
const UPDATE_LINE_ITEM = 'UPDATE_LINE_ITEM';
const UPDATE_PAYOFF = 'UPDATE_PAYOFF';
const SET_EDITING_PAYOFF = 'SET_EDITING_PAYOFF';


const EditingPayoffReducer = (
  state=[],
  action
) =>{
  switch(action.type){
    case SET_EDITING_PAYOFF:{
      return action.payoffs;
    }; break;
    case UPDATE_PAYOFF:{
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
