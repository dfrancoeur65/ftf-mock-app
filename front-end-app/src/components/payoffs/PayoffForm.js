import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'
import {Search, Button} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Client from '../../api/Client';


class PayoffForm extends React.Component {


  handleFormSubmit = ()=>{
    this.props.onFormSubmit(
      this.state.loan_id,
      this.state.payoff_date)
  }

  componentWillMount() {
    this.resetComponent()
    this.resetResults()
  }

  resetComponent = () => {
      this.setState(
        {
          isLoading: false,
          results: [],
          value: '',
          loan_id:null,
          payoff_date: null,
        }
      )
  }
  resetResults = () =>{
    Client.getLoans((loans)=>{
      this.setState({
        source:loans
      })
    })
  }
  handleDateChange = (date)=>{
    this.setState({
      payoff_date: date
    })
  }
  handleResultSelect = (e, { result }) => this.setState(
    {
      value: result.deal.street,
      loan_id:result.id
     }
  )

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.deal.street)
      this.setState({
        isLoading: false,
        results: _.filter(this.state.source, isMatch),
      })
    }, 300)
  }

  render () {

    const { isLoading, value, results} = this.state
    return(

      <form className = 'ui form'>
      <div className = 'field'>
      <label>Select Loan</label>
      <Search
      loading={isLoading}
      onResultSelect={this.handleResultSelect}
      onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
      results={results}
      value={value}
      aligned='left'
      fluid={false}
      resultRenderer={
        ({ deal }) => [
          <div key='content' className='content'>
          {deal.street && <div className='street'>{`#${deal.id}, ${deal.street}`}</div>}
          {deal.state && <div className='state'>{deal.state}</div>}
          </div>
        ]
      }
      {...this.props}
      />
      </div>
      <div className='ui field'>
        <label>Select Payoff Date</label>
        <DatePicker
          selected={this.state.payoff_date}
          onChange={this.handleDateChange}
          />
      </div>
      <Button
      onClick = {this.handleFormSubmit}
      >
      Create Payoff</Button>
      </form>
    )
  }
}

export default PayoffForm;
