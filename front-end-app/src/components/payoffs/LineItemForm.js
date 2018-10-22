import React from 'react';
import {Button, Input, Label} from 'semantic-ui-react';
import PropTypes from 'prop-types'



class LineItemForm extends React.Component {

  handleFormSubmit = ()=>{
    this.props.onFormSubmit(
      this.state.form)
    }

    componentWillMount() {
      this.resetComponent()
    }

    handleTypeChange = event =>{
      const newForm = Object.assign({}, this.state.form);
      newForm.item_type = event.target.value;
      this.setState({
        form:newForm
      })
    }
    handleAmountChange = event =>{
      const newForm= Object.assign({},this.state.form);
      newForm.amount = event.target.value
      this.setState({
        form:newForm
      })
    }

    resetComponent = () => this.setState({
      form:{
        payoff_id:this.props.payoffId,
        item_type: null,
        amount:null,
      }
    })

    render () {

      const {form} = this.state
      return(
        <form className = 'ui form'>
          <div className = 'ui field'>
            <Label>Select Type
            </Label>
            <select placeholder = "Select Type" value={form.item_type} onChange={this.handleTypeChange}>
              <option value="" disabled selected>Select Type</option>
              <option value="legal_fee">
                Legal Fee
              </option>
              <option value="discharge_fee">
                Discharge Fee
              </option>
            </select>
          </div>
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
          <Button
            onClick = {this.handleFormSubmit}
            >
            Create Line Item</Button>
        </form>
      )
    }
  }

  LineItemForm.propTypes = {
    onFormSubmit:PropTypes.func,
    payoffId:PropTypes.number,
  }

  export default LineItemForm;
