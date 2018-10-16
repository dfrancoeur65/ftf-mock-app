import React from 'react'
import PropTypes from 'prop-types'

const Pagination = (props) => {
  return (
    <Pagination activePage={props.currentPage} onPageChange={props.handlePageChange} totalPages={props.totalPages} />
  )
}

export default Pagination;
