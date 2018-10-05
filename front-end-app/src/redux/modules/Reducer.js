
import React, { Component } from 'react';
import {combineReducers} from 'redux';
import UsersReducer from './UsersReducer';
import ColumnsReducer from './ColumnsReducer';
import OfferingsReducer from './OfferingsReducer';
import InvestmentsReducer from './InvestmentsReducer';

const Reducer = combineReducers(
  {
    columns: ColumnsReducer,
    users: UsersReducer,
    availableOfferings:OfferingsReducer,
    investments:InvestmentsReducer,
  }
)






export default Reducer;
