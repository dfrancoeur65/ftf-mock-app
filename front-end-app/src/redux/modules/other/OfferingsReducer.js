const SET_AVAILABLE_OFFERINGS= 'SET_AVAILABLE_OFFERINGS';

const OfferingsReducer = (
  state = [],
  action
)=>{
  let allOfferings;
  switch(action.type){
      case SET_AVAILABLE_OFFERINGS: allOfferings = action.availableOfferings; break;
      default: return state;
    }
    return allOfferings;
  }

  export function setAvailableOfferings(offerings){

    return {
      type: SET_AVAILABLE_OFFERINGS,
      availableOfferings: offerings,
    }
  }


export default OfferingsReducer;
