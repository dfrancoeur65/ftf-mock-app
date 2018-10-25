import React from 'react'

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
