import React from 'react'
import PropTypes from 'prop-types'
import ModalSimpleForm from '../ModalSimpleForm';
import List from './List';
import PayoffForm from './PayoffForm';



class Payoffs extends React.Component {
  state = {
    isModalOpen:false,
  }

  handleFormSubmit = (loan_id,payoff_date) =>{
    console.log("Submitted the new payoff");
    this.props.createNewPayoff(loan_id,payoff_date)
    this.handleModalClose();
  }

  handleModalClose = ()=>{
    this.setState({isModalOpen:false})
  }

  openModal = () =>{
    this.setState({isModalOpen:true})
  }

  render () {

    return(
      <div className = 'ui grid'>
      <div className='row'>
        <div className='ui right float button'
          onClick = {this.openModal}>
          Draft Payoff
        </div>
      </div>
      <div className = 'row'>
      <List
        onMount={this.props.onMount}
        payoffs={this.props.payoffs}
        payoffsPathname={this.props.payoffsPathname}
      />
      </div>
      <ModalSimpleForm
        isOpen={this.state.isModalOpen}
        title = 'Create Draft Payoff'
        form = {<PayoffForm
            onFormSubmit = {this.handleFormSubmit}
            />}
        modalClose = {this.handleModalClose}

        />
      </div>

    )
  }
}

Payoffs.propTypes = {
  payoffs: PropTypes.array,
  onMount:PropTypes.func,
  createNewPayoff:PropTypes.func,
}

export default Payoffs;
