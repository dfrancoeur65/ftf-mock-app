import Client from '../../api/Client';

const ADD_NEW_PAYOFF = 'ADD_NEW_PAYOFF';
const UPDATE_PAYOFFS = 'UPDATE_PAYOFFS';


const columnHeaders = ['Payoff Id',
  'Created At',
  'Payoff Date',
  'Deal',
  'Payoff Amount',
  'Payoff Status',
  'View Payoff'];

const initialState = {
  data: [],
  headers: columnHeaders
};
const PayoffsReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_NEW_PAYOFF:
      return {
        ...state,
        data: [action.payoff, ...state.data]
      };
    case UPDATE_PAYOFFS:
      return {
        ...state,
        data: [...action.payoffs]
      };
    default: return state;
  }
};

export function addPayoff(data) {
  return {
    type: ADD_NEW_PAYOFF,
    payoff: data
  };
}

export const updatePayoffs = payoffs => ({
  type: UPDATE_PAYOFFS,
  payoffs
});
export const createPayoff = (data, dispatch) => {
  Client.createPayoff(data, payoff => {
    dispatch(
      addPayoff(payoff)
    );
  });
};

export const getPayoffs = dispatch => {
  Client.getAllPayoffs(payoffs => {
    dispatch(
      updatePayoffs(
        payoffs
      )
    );
  });
};

export default PayoffsReducer;
