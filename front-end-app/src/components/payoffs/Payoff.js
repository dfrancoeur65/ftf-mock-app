import React from 'react'
import PropTypes from 'prop-types'

class Payoff extends React.Component {
  render () {
    return(
      <div className='ui item'>
        <div className='content'>
          {this.props.payoff.amount}
        </div>
      </div>
    )
  }
}

export default Payoff;
