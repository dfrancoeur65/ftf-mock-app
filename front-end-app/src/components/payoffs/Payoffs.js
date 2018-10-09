import React from 'react'
import PropTypes from 'prop-types'
import ModalSimpleForm from '../ModalSimpleForm';
import PayoffsList from './PayoffsList';
import PayoffForm from './PayoffForm';



class Payoffs extends React.Component {
  state = {
    isModalOpen:false,
  }

  handleFormSubmit = (id,date) =>{
    console.log("Submitted the new payoff");
    console.log(id,date);
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
      <PayoffsList
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

export default Payoffs;
