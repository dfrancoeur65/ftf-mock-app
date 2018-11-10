import React from 'react';
import lifecycle from 'react-pure-lifecycle';
import PropTypes from 'prop-types';
import { Loader } from 'semantic-ui-react';
import ListPagination from './ListPagination';


const methods = {
  componentDidMount(props) {
    props.onMount(props.currentPage);
  }
};

const PaginatedList = ({
  title, headers, rows, rowElement, isPaginated, currentPage, onPageChange, totalPages
}) => (!rows.length ? (
  <Loader active inline="centered" />
) : (
  <div>
    <h2>
      {title}
    </h2>
    <table className="ui celled fixed table">
      <thead className="">
        <tr className="">
          {
              headers.map((header, index) => (
                <th key={index}>
                  {header}
                </th>
              ))
          }
        </tr>
      </thead>
      <tbody>
        {
          rows.length && rows.map(row => (
            rowElement(row)
          ))
      }
      </tbody>
    </table>
    {isPaginated
    && (
    <ListPagination
      currentPage={currentPage}
      handlePageChange={onPageChange}
      totalPages={totalPages}
    />
    )
  }
  </div>
));

PaginatedList.propTypes = {
  headers: PropTypes.array,
  title: PropTypes.string,
  rows: PropTypes.array,
  onMount: PropTypes.func,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  totalPages: PropTypes.number,
  isPaginated: PropTypes.bool.isRequired,
  rowElement: PropTypes.func.isRequired
};

PaginatedList.defaultProps = {
  headers: [],
  title: 'List',
  rows: [],
  onMount: () => {},
  currentPage: 1,
  onPageChange: () => {},
  totalPages: 1
};

export default lifecycle(methods)(PaginatedList);
