
import React, { Component } from 'react';
import {combineReducers} from 'redux';
import PayoffsReducer from './PayoffsReducer';
import EditingPayoffReducer from './EditingPayoffReducer';
import ConstructionDrawsReducer from './other/ConstructionDrawsReducer';

const Reducer = combineReducers(
  {
    payoffs: PayoffsReducer,
    editingPayoff: EditingPayoffReducer,
    construction_draws:ConstructionDrawsReducer,
  }
)


export default Reducer;
