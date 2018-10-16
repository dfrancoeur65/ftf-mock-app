import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import {handleGetDeals, handlePageChange} from '../../redux/modules/other/DealsReducer';
import PaginatedList from '../PaginatedList';

const mapDispatchToPaginatedList = (dispatch,props)=>({
  onMount:(page)=>handleGetDeals(page,dispatch),
  onPageChange:(e,{activePage})=>handlePageChange(dispatch,{activePage}),
});

const mapStateToPaginatedList = (state)=>({
  headers:state.deals.headers,
  rows:state.deals.pageDeals,
  totalPages:state.deals.totalPages,
  currentPage:state.deals.currentPage,

});

const DealsDashboard = connect(
  mapStateToPaginatedList,
  mapDispatchToPaginatedList,
)(PaginatedList);

export default DealsDashboard;
