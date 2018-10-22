import React from 'react'
import PropTypes from 'prop-types'
import ModalSimpleForm from '../ModalSimpleForm';
import PayoffForm from './PayoffForm';
import PaginatedList from '../PaginatedList';
import PayoffRow from './PayoffRow'


class Payoffs extends React.Component {
  state = {
    isModalOpen:false,
  }

  handleFormSubmit = (loan_id,payoff_date) => {
    console.log("Submitted the new payoff");
    this.props.onNewPayoff(loan_id,payoff_date)
    this.handleModalClose();
  }

  handleModalClose = () => {
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
      <PaginatedList
        rows={this.props.payoffs}
        headers={this.props.headers}
        onMount={this.props.onMount}
        title='Payoffs List'
        isPaginated={false}
        rowElement={PayoffRow}
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

// <List
//   onMount={this.props.onMount}
//   payoffs={this.props.payoffs}
//   headers={this.props.headers}
// />

export default Payoffs;
