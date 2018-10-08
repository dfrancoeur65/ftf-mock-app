import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types'
import {Search, Button} from 'semantic-ui-react';
import Deals from './data';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const source = Deals;

const today = Date.parse("2018-07-28T20:16:14.845Z")

class PayoffForm extends React.Component {

  handleFormSubmit = ()=>{
    this.props.onFormSubmit(
      this.state.loanId,
      this.state.payoffDate)
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => {this.setState(
    {
      isLoading: false,
      results: [],
      value: '',
      loanId:null,
      payoffDate: null,
     }
  )
}
  handleDateChange = (date)=>{
    this.setState({
      payoffDate: date
    })
  }
  handleResultSelect = (e, { result }) => this.setState(
    {
      value: result.street,
      loanId:result.loan_id
     }
  )

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.street)
      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
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
        ({ street,state, city }) => [
          <div key='content' className='content'>
          {street && <div className='street'>{street}</div>}
          {state && <div className='state'>{state}</div>}
          </div>
        ]
      }
      {...this.props}
      />
      </div>
      <div className='ui field'>
        <label>Select Payoff Date</label>
        <DatePicker
          selected={this.state.payoffDate}
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
