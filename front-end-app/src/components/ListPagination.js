import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'semantic-ui-react';

const ListPagination = ({ currentPage, handlePageChange, totalPages }) => (
  <Pagination activePage={currentPage} onPageChange={handlePageChange} totalPages={totalPages} />
);

ListPagination.propTypes = {
  currentPage: PropTypes.number,
  handlePageChange: PropTypes.func,
  totalPages: PropTypes.number
};

ListPagination.defaultProps = {
  currentPage: 1,
  handlePageChange: () => {},
  totalPages: 1
};

export default ListPagination;
