import React from 'react'
import PropTypes from 'prop-types'

const DealRow = (props) =>(
  <tr key={props.id}>
    <td>
      {props.street}
    </td>
    <td>
      {props.state}
    </td>
    <td>
      {props.borrower_id}
    </td>
  </tr>
)

export default DealRow
