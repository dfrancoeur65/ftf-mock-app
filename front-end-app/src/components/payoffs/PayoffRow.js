import React from 'react'
import { Link } from 'react-router-dom';
import {toDollar,prettyDates,snakeCaseToRegular} from '../../helpers/formatting';

//Child component

const PayoffRow = (props) => (
  <tr key={props.id}>
    <td>
      {props.id}
    </td>
    <td>
      {prettyDates(props.created_at)}
    </td>
    <td>
      {prettyDates(props.payoff_date)}
    </td>
    <td>
      {props.deal.street}
    </td>
    <td>
      {toDollar(props.amount)}
    </td>
    <td style={{color:props.status === 'draft' ? "blue": props.status==='sent' ? 'orange' : 'green'}}>
      {snakeCaseToRegular(props.status)}
    </td>
    <td>
    <Link className='ui button' to={`payoffs/${props.id}`}>
        View
    </Link>
    </td>
  </tr>
)


export default PayoffRow;
