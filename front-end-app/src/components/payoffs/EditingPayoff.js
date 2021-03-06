import React from 'react'
import PropTypes from 'prop-types'
import {Table,Loader, Statistic, Icon, Button} from 'semantic-ui-react';
import { toDollar } from '../../helpers/formatting';
import ModalSimpleForm from '../ModalSimpleForm';
import LineItemForm from './LineItemForm';
import ReceivePaymentForm from './ReceivePaymentForm';
import LineItem from './LineItem'
import ReceivedPaymentsList from './ReceivedPaymentsList';
import PayoffDetails from './PayoffDetails'

//View for editing a single payoff
const removable = ['late_fee','discharge_fee','legal_fee'];

function isRemovable(item){
  return removable.includes(item.item_type)
}

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
    this.props.onAddLineItem(data);
    this.handleModalClose();

  }
  handleStatusChange = event =>{
    this.props.onStatusChange({
      id:this.props.editingPayoff.id,
      status:event.target.value,
    })
  }

  handleReceivedPayment= (data)=>{
    this.props.onReceivePayment(data);
    this.handleModalClose();

  }
  resetComponent(){
    this.props.onMount()
  }

  handleLineItemDelete = (id) =>{
    this.props.onDeleteLineItem(id);

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
        <div className='row'>
          <PayoffDetails
            payoff={payoff}
            onStatusChange={this.handleStatusChange}
            />
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
                  isRemovable={isRemovable}
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

EditingPayoff.propTypes = {
  onAddLineItem:PropTypes.func,
  editingPayoff:PropTypes.object,
  onStatusChange:PropTypes.func,
  onReceivePayment:PropTypes.func,
  onMount:PropTypes.func,
  onDeleteLineItem:PropTypes.func
}





  export default EditingPayoff;
