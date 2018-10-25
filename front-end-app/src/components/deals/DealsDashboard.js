import {connect} from 'react-redux';
import {handleGetDeals, handlePageChange} from '../../redux/modules/other/DealsReducer';
import PaginatedList from '../PaginatedList';
import DealRow from './DealRow'


const mapDispatchToPaginatedList = (dispatch,props)=>({
  onMount:(page)=>handleGetDeals(page,dispatch),
  onPageChange:(e,{activePage})=>handlePageChange(dispatch,{activePage}),
});

const mapStateToPaginatedList = (state)=>({
  title:"Active Deals",
  headers:state.deals.headers,
  rows:state.deals.pageDeals,
  totalPages:state.deals.totalPages,
  currentPage:state.deals.currentPage,
  isPaginated:true,
  rowElement:DealRow,
});

const DealsDashboard = connect(
  mapStateToPaginatedList,
  mapDispatchToPaginatedList,
)(PaginatedList);

export default DealsDashboard;
