import React from 'react'
import PropTypes from 'prop-types'
import { Pagination} from 'semantic-ui-react';

const ListPagination = (props) => {
  return (
    <Pagination activePage={props.currentPage} onPageChange={props.handlePageChange} totalPages={props.totalPages} />
  )
}

ListPagination.propTypes = {
  currentPage:PropTypes.number,
  handlePageChange:PropTypes.func,
  totalPages:PropTypes.number,
}

export default ListPagination;
