import React from 'react';
import {Button, Input, Label} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types'



class ReceivePaymentForm extends React.Component {

  handleFormSubmit = ()=>{
    this.props.onFormSubmit(
      this.state.form)
  }

  componentWillMount() {
    this.resetComponent()
  }


handleAmountChange = event =>{
  const newForm= Object.assign({},this.state.form);
  newForm.amount = event.target.value
  this.setState({
    form:newForm
  })
}

handleDateChange = (date)=>{
  const newForm= Object.assign({},this.state.form);
  newForm.date_received = date;
  this.setState({
    form:newForm
  })
}

  resetComponent = () => this.setState({
      form:{
      payoff_id:this.props.payoffId,
      date_received: null,
      amount:null,
    }
  })

  render () {

    const {form} = this.state
    return(
      <form className = 'ui form'>

      <div className = 'ui field'>
      <Input
        onChange={this.handleAmountChange}
        value={form.amount}
        labelPosition='right'
        type='text'
        placeholder='Amount'
      >
      <Label basic>$</Label>
      <input />
      </Input>
      </div>
      <div className='ui field'>
        <label>Select Date Received</label>
        <DatePicker
          selected={this.state.form.date_received}
          onChange={this.handleDateChange}
          />
      </div>
      <Button
       onClick = {this.handleFormSubmit}
      >
      Receive Payment</Button>
      </form>
    )
  }
}

ReceivePaymentForm.propTypes = {
  onFormSubmit:PropTypes.func,
  payoffId:PropTypes.number,
}

export default ReceivePaymentForm;
