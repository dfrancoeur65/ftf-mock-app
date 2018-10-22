import React from 'react'
import PropTypes from 'prop-types'

class SimpleForm extends React.Component {

  state = {
    form:{
      amount:
    }
  }

  onInputChange = evt =>{
    const newForm = Object.assign({}, this.state.form);
    newForm[evt.target.name] = evt.target.value;
    this.setState({
      form: newForm
    });
  }

  onFormSubmit = (evt)=>{
    const investment = Object.assign({},this.state.form);
    investment.offering = {title:this.state.form.title};
    const fieldErrors = this.validate(investment)
    this.setState({fieldErrors:fieldErrors});
    evt.preventDefault();
    if (Object.keys(fieldErrors).length) return;
    this.props.onInvestmentFormSubmit(investment);
    this.setState({
      form:{
        user_id:null,
        amount: null,
        offering_id:null,
        title:null
      },
      modalOpen:false,
      investmentSuccessOpen:true,
    })
  }

  validate = investment =>{
    const errors={};
    if (!investment.amount) errors.amount = "You must enter an amount";
    return errors;
  }

  render () {
    <form className = 'ui form'>
      <div className='equal width fields'>
        <div className='field'>
          <label>Investment Amount</label>
          <div className='ui input'>
            <input
              type='number'
              name='amount'
              value={this.state.form.amount}
              control='input'
              placeholder='ex. 10,000'
              onChange={this.onInputChange}/>
            <span style={{color: 'red'}}>{this.state.fieldErrors.amount}</span>
          </div>
        </div>
      </div>
      <div className='inline fields'>
        <div className='grouped fields'>
          <label>Select Funding Account</label>
          {
            this.state.currentUser.bankAccounts.map((account,index)=>(
              <div key={index} className='field'>
                <label>
                  <input
                    key={index}
                    onChange={this.handleBankAccountChange}
                    id={account.id}
                    type='radio'
                    name='bankAccount'/>
                  {account.institution+" - xxxx"+account.last_four_digits}
                </label>

              </div>
            ))
          }
          <div className= 'field'>
            <label><input onChange={this.handleBankAccountChange} id="null" type='radio' name='bankAccount'/> New Account</label>

          </div>

        </div>
      </div>
      <div className='field'>
        <button
          className='ui button'
          type='submit'
          onClick={this.onFormSubmit}
          >Submit
        </button>
      </div>
    </form>
  }
}

export default SimpleForm;
