import React from 'react'
import PropTypes from 'prop-types'
import {Table,Icon, Button} from 'semantic-ui-react';
import LineItemDescription from './LineItemDescription'
import {toMonthYearString,prettyDates, toDollar, snakeCaseToRegular } from '../../helpers/formatting';


const LineItem = (props) => {
  const item = props.item
  return(
    <Table.Row>
    <Table.Cell>{snakeCaseToRegular(item.item_type)}</Table.Cell>
    <Table.Cell>{<LineItemDescription item={item}/>}</Table.Cell>
    <Table.Cell>{snakeCaseToRegular(item.status)}</Table.Cell>
    <Table.Cell>{toDollar(item.amount)}</Table.Cell>
    <Table.Cell>
    {props.isRemovable(item)&&
      <Button
      onClick={
        ()=>props.deleteLineItem(item.id)
      }
      ><Icon name='delete'/>Delete
      </Button>}
      </Table.Cell>
      </Table.Row>
    )

  }
  LineItem.propTypes={
    isRemovable:PropTypes.func,
    item:PropTypes.object,
    deleteLineItem:PropTypes.func,
  }


  export default LineItem
