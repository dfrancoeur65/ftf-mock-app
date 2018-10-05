
const ColumnsReducer = (
  state = ['First Name','Last Name', 'Admin','Underwriter','Sales','Reviewer','Dev'],
  action
) =>{
  switch(action.type){
    default: return state;
  }
}

export default ColumnsReducer;
