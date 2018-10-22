import React from 'react'
import PropTypes from 'prop-types'
import {List} from 'semantic-ui-react';
import { toDollar } from '../../helpers/formatting';


const ReceivedPaymentsList = (props) =>{
  const payments = props.payments;
  return(
    !payments.length ? (
      <div>
      <h3>No Received Payments</h3>
      </div>
    ) : (
      <div>
      <h3>Received Payments</h3>
      <List divided relaxed>
      {
        payments.map((payment, index)=>(
          <List.Item key={index}>
          <List.Icon name='money' size='large' verticalAlign='middle' />
          <List.Content>
          <List.Header as='a'>{toDollar(payment.amount)}</List.Header>
          <List.Description as='a'>Received: {payment.date_received}</List.Description>
          </List.Content>
          </List.Item>
        ))
      }
      </List>
      </div>
    )
  )
}

ReceivedPaymentsList.propTypes = {
  payments:PropTypes.array
}


export default ReceivedPaymentsList
