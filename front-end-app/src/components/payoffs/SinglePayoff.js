import { connect } from 'react-redux';
import {
  handleStatusChange,
  handleReceivedPayment,
  handleUpdatedPayoff,
  handleNewLineItem,
  handleDeleteLineItem
} from '../../redux/modules/EditingPayoffReducer';
import EditingPayoff from './EditingPayoff';

const mapDispatchToEditingPayoffProps = (dispatch, props) => (
  {
    onMount: () => handleUpdatedPayoff(props.payoffId, dispatch),
    onDeleteLineItem: id => handleDeleteLineItem(id, dispatch),
    onAddLineItem: data => handleNewLineItem(data, dispatch),
    onReceivePayment: data => handleReceivedPayment(data, dispatch),
    onStatusChange: data => handleStatusChange(data, dispatch)
  }
);

const mapStateToEditingPayoffProps = state => (
  {
    editingPayoff: state.editingPayoff
  }
);

const SinglePayoff = connect(
  mapStateToEditingPayoffProps,
  mapDispatchToEditingPayoffProps,
)(EditingPayoff);


export default SinglePayoff;
