import React, {Component,propTypes} from 'react';
import {Button, Modal,  Form} from 'semantic-ui-react';
import Humanize from 'humanize-plus';
import PropTypes from 'prop-types';
import {toRoundedDollar} from '../helpers/formatting';


const inlineStyle = {
  modal : {
    marginTop: '-300px',
    marginLeft: 'centered',
    marginRight: 'centered'
  }
};


class OfferingCards extends Component {

static propTypes = {
  availableOfferings: PropTypes.array,
}
state = {
  modalOpen:false,
  investmentSuccessOpen:false,
  investmentIncrement:2000,
  entities:['Individual','Joint Account',
            'Company','Trust','SD-IRA'],
  form:{
    user_id:null,
    amount: null,
    offering_id: null,
    bankAccount:37,
    title: null,
  },
  fieldErrors:{

  },
  currentUser:{
      id:55,
      first_name:"Daniel",
      last_name:"Francoeur",
      email:"daniel@fundthatflip.com",
      bankAccounts:[
        {
          id: 34,
          default:true,
          institution: "Bank of America",
          last_four_digits: 4567,
      },
      {
        id:37,
        default:false,
        institution:'USAA',
        last_four_digits: 3333,
      }
    ]
  },
}

componentDidMount(){
  this.props.onMount()
}

onInputChange = evt =>{
  const newForm = Object.assign({}, this.state.form);
  newForm[evt.target.name] = evt.target.value;
  this.setState({
    form: newForm
  });
}

handleBankAccountChange = evt =>{
  const newForm = Object.assign({},this.state.form)
  newForm.bankAccount = evt.target.id;
  this.setState({
    form:newForm
  })
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

onInvestmentClick= (offering) =>{
  const newForm = Object.assign({}, this.state.form);
  newForm.offering_id = offering.id;
  newForm.title = offering.title;
  newForm.user_id = this.state.currentUser.id
  this.setState({
    form:newForm,
    modalOpen:true,
  })
}
modalClose = () =>{
  this.setState({
    modalOpen:false
  })
}

successModalClose = () =>{
  this.setState({
    investmentSuccessOpen:false
  })
}

render(){


  return(
    <div>
    <div className = 'ui grid'>
  <div className = 'ui cards'>
  {
    this.props.availableOfferings.map((offering,index)=>(
    <div className ='ui card' key={index}>
      <div className = 'content'>

      <div className = 'header'>
      {offering.title}
      </div>
      <div className ='meta'>
        State: {offering.state}
      </div>
      <table className = 'ui table'>
      <tbody>
        <tr>
        <td>
        LTV
        </td>
        <td>
        {offering.ltv}
        </td>
        </tr>
        <tr>
        <td>
        Open for Investment
        </td>
        <td>
        {toRoundedDollar(offering.open_for_investment)}
        </td>
        </tr>
        <tr>
        <td>
        Total Loan Amount
        </td>
        <td>
          {toRoundedDollar(offering.amount)}
        </td>
        </tr>
        </tbody>
        </table>
      </div>
        <div className="ui two column centered padded grid">
        <div className='row'>
        <Button
        floated='right'
        color='green'
        onClick={() => this.onInvestmentClick(offering)}
        >Invest Now</Button>
        <div className="column">

        </div>
        </div>
</div>
    </div>
  )) }
  </div>
  </div>

  <Modal
    size='large'
    dimmer='inverted'
    style = {inlineStyle.modal}
    open = {this.state.modalOpen}
    closeIcon
    onClose = {this.modalClose}
    >
    <Modal.Header>
    Hi {this.state.currentUser.first_name ?
        this.state.currentUser.first_name : "Investor"}
    , start your investment below:
    </Modal.Header>
    <Modal.Content>

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
    </Modal.Content>
  </Modal>
  <Modal
    size='large'
    dimmer='inverted'
    style = {inlineStyle.modal}
    open = {this.state.investmentSuccessOpen}
    closeIcon
    onClose = {this.successModalClose}
    >
    <Modal.Header>
    Investment Successful, you will receive an email confirmation to:
    {this.state.currentUser.email}
    </Modal.Header>
    <Modal.Content>

    </Modal.Content>
  </Modal>
  </div>
);
}
}
export default OfferingCards;
