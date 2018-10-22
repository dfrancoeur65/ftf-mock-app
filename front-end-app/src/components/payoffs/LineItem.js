import React from 'react'
import PropTypes from 'prop-types'
import {Icon, Button} from 'semantic-ui-react';
import LineItemDescription from './LineItemDescription'
import {toDollar, snakeCaseToRegular } from '../../helpers/formatting';


const LineItem = (props) => {
  const item = props.item
  return(
    <tr>
      <td>{snakeCaseToRegular(item.item_type)}</td>
      <td>{<LineItemDescription item={item}/>}</td>
      <td>{snakeCaseToRegular(item.status)}</td>
      <td>{toDollar(item.amount)}</td>
      <td>
        {props.isRemovable(item)&&
          <Button
            onClick={
              ()=>props.deleteLineItem(item.id)
            }
            ><Icon name='delete'/>Delete
          </Button>}
        </td>
      </tr>
    )

  }
  LineItem.propTypes={
    isRemovable:PropTypes.func,
    item:PropTypes.object,
    deleteLineItem:PropTypes.func,
  }


  export default LineItem
