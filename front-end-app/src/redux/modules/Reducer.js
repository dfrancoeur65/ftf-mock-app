
import {combineReducers} from 'redux';
import PayoffsReducer from './PayoffsReducer';
import EditingPayoffReducer from './EditingPayoffReducer';
import DealsReducer from './other/DealsReducer';

//reducer
const Reducer = combineReducers(
  {
    payoffs: PayoffsReducer,
    editingPayoff: EditingPayoffReducer,
    deals:DealsReducer,
  }
)


export default Reducer;
