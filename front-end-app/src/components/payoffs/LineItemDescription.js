import React from 'react'
import PropTypes from 'prop-types'
import {toMonthYearString,prettyDates, toDollar, snakeCaseToRegular } from '../../helpers/formatting';

const LineItemDescription = (props) => (
  <div className='ui content'>
  {
    props.item.accrual_period_start && <div className='accrual-period'>
    Accrual Period: {toMonthYearString(props.item.accrual_period_start)}
    </div>
  }
  {
    props.item.invoice_id && <div className='invoice'>
    Invoice No: {props.item.invoice_id}
    </div>
  }
  </div>

)

LineItemDescription.propTypes = {
  item:PropTypes.object,
}

export default LineItemDescription
