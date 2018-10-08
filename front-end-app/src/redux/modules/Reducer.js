
import React, { Component } from 'react';
import {combineReducers} from 'redux';
import PayoffsReducer from './PayoffsReducer';

const Reducer = combineReducers(
  {
    payoffs: PayoffsReducer,
  }
)


export default Reducer;
