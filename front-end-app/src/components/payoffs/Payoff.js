import React from 'react'
import ExamplePayoff from './PayoffData';
import {Table, Statistic, Icon, Button} from 'semantic-ui-react';
import {toMonthYearString,prettyDates, toDollar, snakeCaseToRegular } from '../../helpers/formatting';
import ModalSimpleForm from '../ModalSimpleForm';
import LineItemForm from './LineItemForm';
const payoff = ExamplePayoff;
const removable = ['late_fee','discharge_fee'];

class Payoff extends React.Component {

  state={
    headers:["Type", "Description","Status","Amount","Action"],

    isModalOpen:false,
  }

  handleAddNewLineItem = (data)=>{
    console.log("add new line item"+data.amount+"and "+data.item_type)
    this.handleModalClose();
  }

  handleLineItemDelete = (id) =>{
    console.log("Delete this item"+id)
  }

  modalOpen = ()=>this.setState({
    isModalOpen:true
  })

  handleModalClose = ()=>this.setState({
    isModalOpen:false
  })

  render () {
    return(
      <div>
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
              </tbody>
              </table>
            </div>

          </div>
        </div>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              {
                this.state.headers.map((header,index)=>(
                  <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
                ))
              }
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {
              payoff.line_items.map((lineItem, index)=>(
                <LineItem
                  key={index}
                  item={lineItem}
                  deleteLineItem={this.handleLineItemDelete}
                  />
              ))}

            </Table.Body>
          </Table>
          <div className='row'>

            <Button floated='right' onClick = {this.modalOpen}>
              <Icon name='add'/>
              Add new line item
            </Button>
            <Button floated='right'>
              <Icon name='add'/>
              Receive Payment
            </Button>
          </div>
          <Statistic
            floated="right"
            size="small"
            label="Total Payoff Amount"
            value={toDollar(payoff.amount)}
            />
          <ModalSimpleForm
            isOpen={this.state.isModalOpen}
            title='Create Line Item'
            form={
              <LineItemForm
                onFormSubmit = {this.handleAddNewLineItem}
                />
            }
            modalClose = {this.handleModalClose}
            />
        </div>
      )
    }
  }


  const Content = (props)=>(
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

function isRemovable(item){
  return removable.includes(item.item_type)
}

class LineItem extends React.Component {
  render (){
    const item = this.props.item

    return(
      <Table.Row>
        <Table.Cell>{snakeCaseToRegular(item.item_type)}</Table.Cell>
        <Table.Cell>{<Content item={item}/>}</Table.Cell>
        <Table.Cell>{snakeCaseToRegular(item.status)}</Table.Cell>
        <Table.Cell>{toDollar(item.amount)}</Table.Cell>
        <Table.Cell>
          {isRemovable(item)&&
            <Button
            onClick={
              ()=>this.props.deleteLineItem(item.id)
            }
           ><Icon name='delete'/>Delete
         </Button>}
       </Table.Cell>
      </Table.Row>
    )
  }
}

export default Payoff;
