import React from 'react'
import {Table,List,Loader, Statistic, Icon, Button} from 'semantic-ui-react';
import {toMonthYearString,prettyDates, toDollar, snakeCaseToRegular } from '../../helpers/formatting';
import ModalSimpleForm from '../ModalSimpleForm';
import LineItemForm from './LineItemForm';
import ReceivePaymentForm from './ReceivePaymentForm';

const removable = ['late_fee','discharge_fee','legal_fee'];

class EditingPayoff extends React.Component {

  state={
    headers:["Type", "Description","Status","Amount","Action"],
    isLineItemModalOpen:false,
    isReceivedPaymentModalOpen:false,
  }

  componentDidMount() {
    this.resetComponent()
  }

  handleAddNewLineItem = (data)=>{
    this.props.addLineItem(data);
    this.handleModalClose();
    this.resetComponent();
  }

  handleReceivedPayment= (data)=>{
    this.props.receivePayment(data);
    this.handleModalClose();
    this.resetComponent();
  }
  resetComponent(){
    this.props.onMount()
  }

  handleLineItemDelete = (id) =>{
    this.props.deleteLineItem(id);
    this.resetComponent()
  }

  lineItemModalOpen = ()=>this.setState({
    isLineItemModalOpen:true
  })
  receivedPaymentModalOpen = ()=> this.setState({
    isReceivedPaymentModalOpen:true
  })

  handleModalClose = ()=>this.setState({
    isLineItemModalOpen:false,
    isReceivedPaymentModalOpen:false,
  })

  render () {
    const payoff = this.props.editingPayoff
    return !payoff.id ? (
      <Loader active inline='centered'/>
    ) : (
      <div className='ui grid'>
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
            <div className='column'>

              <Button floated="right" onClick = {this.lineItemModalOpen}>
                <Icon name='add'/>
                Add new line item
              </Button>
              <Button floated='right' onClick={this.receivedPaymentModalOpen}>
                <Icon name='money'/>
                Receive Payment
              </Button>
            </div>
          </div>
          <div className='row'>
            <div className='column'>

              <Statistic
                floated="right"
                size="small"
                label="Total Payoff Amount"
                value={toDollar(payoff.amount)}
                />
            </div>
          </div>

          <div className='row'>
              <div className = 'right floated column'>
                <div className='row'>
                <ReceivedPaymentsList
                  payments={payoff.received_payments}
                  />
              </div>
              <div className='row'>
                <Statistic
                  floated="right"
                  size="small"
                  label="Outstanding Amount"
                  value={toDollar(payoff.outstanding_amount)}
                  />
              </div>
              </div>
          </div>
          <ModalSimpleForm
            isOpen={this.state.isLineItemModalOpen}
            title='Create Line Item'
            form={
              <LineItemForm
                onFormSubmit = {this.handleAddNewLineItem}
                payoffId = {payoff.id}
                />
            }
            modalClose = {this.handleModalClose}
            />
          <ModalSimpleForm
            isOpen={this.state.isReceivedPaymentModalOpen}
            title='Receive Payment'
            form={
              <ReceivePaymentForm
                onFormSubmit = {this.handleReceivedPayment}
                payoffId = {payoff.id}
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

  const ReceivedPaymentsList = ({payments}) =>{
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





    export default EditingPayoff;
