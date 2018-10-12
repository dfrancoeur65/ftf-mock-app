// import React, {Component} from 'react';
// import {Button, Modal, Header, Form,Input} from 'semantic-ui-react';
// import Humanize from 'humanize-plus';
//
const inlineStyle = {
  modal : {
    marginTop: '-300px',
    marginLeft: 'centered',
    marginRight: 'centered'
  }
};
// const ModalButton = (props) => (
  // <Button
  // floated='right'
  // color='green'
  // >Invest Now</Button>
// )
//
// class InvestNowModal extends React.Component {
//   state = {
//     open: false,
//     investmentIncrement:2000,
//     entities:['Individual','Joint Account',
//               'Company','Trust','SD-IRA'],
//     form:{
//       entity:null,
//       amount: null,
//       investment_id:null,
//       bankAccount:37,
//     },
//     fieldErrors:{
//
//     },
//     }
//
//
//   onInputChange = evt =>{
//     const newForm = Object.assign({}, this.state.form);
//     newForm[evt.target.name] = evt.target.value;
//     this.setState({
//       form: newForm
//     });
//   }
//
//   handleBankAccountChange = evt =>{
//     const newForm = Object.assign({},this.state.form)
//     newForm.bankAccount = evt.target.id;
//     console.log(newForm.bankAccount)
//     this.setState({
//       form:newForm
//     })
//   }
//   onFormSubmit = (evt)=>{
//     const investment = Object.assign({},this.state.form);
//     const fieldErrors = this.validate(investment)
//     this.setState({fieldErrors:fieldErrors});
//     evt.preventDefault();
//     if (Object.keys(fieldErrors).length) return;
//
//
//   }
//
//   validate = investment =>{
//     const errors={};
//     if (!investment.amount) errors.amount = "You must enter an amount";
//     return errors;
//   }
//
// render(){
//   return(
//
//   <Modal
//     size='large'
//     dimmer='inverted'
//     style = {inlineStyle.modal}
//     open = {open}
//     >
//     <Modal.Header>
//     Hi {this.props.currentUser.first_name ?
//         this.props.currentUser.first_name : "Investor"}
//     , start your investment below:
//     </Modal.Header>
//     <Modal.Content>
//
//     <form className = 'ui form'>
//     <div className='equal width fields'>
//       <div className='field'>
//       <label>Investment Amount</label>
//         <div className='ui input'>
//           <input
//           type='number'
//           name='amount'
//           value={this.state.form.amount||null}
//           control='input'
//           placeholder='ex. 10,000'
//           onChange={this.onInputChange}/>
//           <span style={{color: 'red'}}>{this.state.fieldErrors.amount}</span>
//         </div>
//       </div>
//     </div>
//     <div className='inline fields'>
//       <div className='grouped fields'>
//       <label>Select Funding Account</label>
//       {
//         this.props.currentUser.bankAccounts.map((account,index)=>(
//           <div key={index} className='field'>
//           <label>
//           <input
//             key={index}
//             onChange={this.handleBankAccountChange}
//             id={account.id}
//             type='radio'
//             name='bankAccount'/>
//             {account.institution+" - xxxx"+account.last_four_digits}
//           </label>
//
//           </div>
//         ))
//       }
//       <div className= 'field'>
//       <label><input onChange={this.handleBankAccountChange} id="null" type='radio' name='bankAccount'/> New Account</label>
//
//       </div>
//
//     </div>
//     </div>
//     <div className='field'>
//       <button
//       className='ui button'
//       type='submit'
//       onClick={this.onFormSubmit}
//       >Submit
//       </button>
//     </div>
//   </form>
//     </Modal.Content>
//   </Modal>
// )
// }
// }
//
// export default InvestNowModal;
