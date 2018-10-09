
import React, { Component } from 'react';
import {combineReducers} from 'redux';
import PayoffsReducer from './PayoffsReducer';
import EditingPayoffReducer from './EditingPayoffReducer';

const Reducer = combineReducers(
  {
    payoffs: PayoffsReducer,
    editingPayoff: EditingPayoffReducer,
  }
)


export default Reducer;
