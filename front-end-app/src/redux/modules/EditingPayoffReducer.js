import Client from '../../api/Client';

const UPDATE_PAYOFF = 'UPDATE_PAYOFF';

//Reducer
const EditingPayoffReducer = (
  state={},
  action
) =>{
  switch(action.type){
    case UPDATE_PAYOFF:
      return action.payoff;
    default: return state;
  }
}

export function updatePayoff(payoff){
  return {
    type:UPDATE_PAYOFF,
    payoff:payoff,
  }
}

export const handleUpdatedPayoff = (id,dispatch)=>{
  Client.getPayoff(id,(payoff)=>{
    dispatch(
      updatePayoff(payoff)
    )
  })
}

export const handleDeleteLineItem = (id, dispatch) =>{
  Client.deleteLineItem(id,(lineItem)=>{
    handleUpdatedPayoff(lineItem.payoff_id,dispatch)
  })
}

export const handleNewLineItem = (data,dispatch)=>{
  Client.createLineItem(data,(lineItem)=>{
    handleUpdatedPayoff(lineItem.payoff_id,dispatch)
  })
}

export const handleReceivedPayment = (data,dispatch)=>{
  Client.createReceivedPayment(data,(res)=>{
    handleUpdatedPayoff(res.payoff_id,dispatch)
  })
}

export const handleStatusChange = (data,dispatch)=>{
  Client.changePayoffStatus(data,(res)=>{
    handleUpdatedPayoff(res.id,dispatch)
  })
}





export default EditingPayoffReducer;
