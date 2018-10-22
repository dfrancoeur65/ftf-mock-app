import React from 'react'
import PropTypes from 'prop-types'
import {prettyDates} from '../../helpers/formatting';

const PayoffDetails = (props) => {
  const payoff = props.payoff
  return (
    <div className='ui card'>
      <div className = 'ui content'>
        <div className='header'>
          Payoff Details
        </div>
        <div className='meta'>
          Loan: {payoff.deal.street}
        </div>
        <div className='description'>
          <table>
            <tbody>
              <tr>
                <th>
                  Created At:
                </th>
                <td>
                  {prettyDates(payoff.created_at)}
                </td>
              </tr>
              <tr>
                <th>
                  Payoff Date:
                </th>
                <td>
                  {prettyDates(payoff.payoff_date)}
                </td>
              </tr>
              <tr>
                <th>
                  Status:
                </th>
                <td>
                  <select value={payoff.status} onChange={props.onStatusChange}>
                    <option value="" disabled selected>Select Type</option>
                    <option value="draft">
                      Draft
                    </option>
                    <option value="sent">
                      Sent
                    </option>
                    <option value="received">
                      Received
                    </option>
                    <option value="reviewed">
                      Reviewed
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

PayoffDetails.propTypes = {
  onStatusChange:PropTypes.func,
  payoff: PropTypes.object,
}
export default PayoffDetails
