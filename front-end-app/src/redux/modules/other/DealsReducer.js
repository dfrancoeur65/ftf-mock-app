import Client from '../../../api/Client';

const UPDATE_DEALS = 'UPDATE_DEALS';
const columnHeaders = ['Title','State','Borrower']

const initialState = {
  pageDeals:[],
  currentPage:5,
  totalPages:null,
  headers:columnHeaders,
}
const DealsReducer = (
  state=initialState,
  action
) =>{
  switch(action.type){
    case UPDATE_DEALS:
      return {
        ...state,
        pageDeals:action.payload.deals,
        currentPage:action.payload.page,
        totalPages:action.payload.pages,
      };
    default: return state;
  }
}


export const updateDeals = (data)=> {
  return {
    type:UPDATE_DEALS,
    payload:data,
  }
}
export const handlePageChange = (dispatch,data) =>{
  handleGetDeals(data.activePage,dispatch)
}

export const handleGetDeals = (page, dispatch) =>{
  Client.getDeals(page,(res)=>{
    dispatch(
      updateDeals(res)
    )
  })
}


export default DealsReducer;
