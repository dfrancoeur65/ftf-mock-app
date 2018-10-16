import Client from '../../../api/Client';

const ADD_NEW_CONSTRUCTION_DRAW = 'ADD_NEW_CONSTRUCTION_DRAW'
const UPDATE_CONSTRUCTION_DRAWS = 'UPDATE_CONSTRUCTION_DRAWS';

const ConstructionDrawsReducer = (
  state=[],
  action
) =>{
  switch(action.type){
    case UPDATE_CONSTRUCTION_DRAWS:{
      return action.payload.construction_draws;;
    };
    default: return state;
  }
}


export const updateConstructionDraws =(data)=>{
    return {
      type:UPDATE_CONSTRUCTION_DRAWS,
      payload:data,

    }
}

export const getConstructionDraws = (page,dispatch) =>{
  Client.getConstructionDraws(page,(res)=>{
    dispatch(
      updateConstructionDraws(
        res
      )
    )
  })
}

export default ConstructionDrawsReducer;
