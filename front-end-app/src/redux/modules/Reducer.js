
import React, { Component } from 'react';
import {combineReducers} from 'redux';
import PayoffsReducer from './PayoffsReducer';
import EditingPayoffReducer from './EditingPayoffReducer';
import DealsReducer from './other/DealsReducer';

const Reducer = combineReducers(
  {
    payoffs: PayoffsReducer,
    editingPayoff: EditingPayoffReducer,
    deals:DealsReducer,
  }
)


export default Reducer;
