import React from 'react';
import PropTypes from 'prop-types';

const DealRow = ({
  street, state, id, borrower_id
}) => (
  <tr key={id}>
    <td>
      {street}
    </td>
    <td>
      {state}
    </td>
    <td>
      {borrower_id}
    </td>
  </tr>
);

DealRow.propTypes = {
  street: PropTypes.string,
  state: PropTypes.string,
  borrower_id: PropTypes.string,
  id: PropTypes.string
};

DealRow.defaultProps = {
  street: 'error',
  state: 'error',
  borrower_id: 'error',
  id: 'error'
};

export default DealRow;
