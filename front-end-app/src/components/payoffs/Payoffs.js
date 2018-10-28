import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import ModalSimpleForm from '../ModalSimpleForm';
import PayoffForm from './PayoffForm';
import PaginatedList from '../PaginatedList';
import PayoffRow from './PayoffRow';


class Payoffs extends React.Component {
  state = {
    isModalOpen: false
  }

  handleFormSubmit = (loan_id, payoff_date) => {
    this.props.onNewPayoff(loan_id, payoff_date);
    this.handleModalClose();
  }

  handleModalClose = () => {
    this.setState({ isModalOpen: false });
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  render() {
    const {
      payoffs,
      headers,
      onMount
    } = this.props;

    return (
      <div className="ui grid">
        <div className="row">
          <Button
            className="ui right float button"
            onClick={this.openModal}
          >
            Draft Payoff
          </Button>
        </div>
        <div className="row">
          <PaginatedList
            rows={payoffs}
            headers={headers}
            onMount={onMount}
            title="Payoffs List"
            isPaginated={false}
            rowElement={PayoffRow}
          />
        </div>
        <ModalSimpleForm
          isOpen={this.state.isModalOpen}
          title="Create Draft Payoff"
          form={(
            <PayoffForm
              onFormSubmit={this.handleFormSubmit}
            />
)}
          modalClose={this.handleModalClose}
        />
      </div>
    );
  }
}

Payoffs.propTypes = {
  payoffs: PropTypes.array,
  onMount: PropTypes.func,
  onNewPayoff: PropTypes.func,
  headers: PropTypes.array
};
Payoffs.defaultProps = {
  payoffs: []
};
export default Payoffs;
