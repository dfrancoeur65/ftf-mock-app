import {connect} from 'react-redux';
import {setEditingPayoff, updateEditingPayoff} from '../../redux/modules/EditingPayoffReducer';
import EditingPayoff from './EditingPayoff';
import Client from '../../api/Client';

const mapDispatchToEditingPayoffProps = (dispatch,props)=>(
  {
    onMount:() =>{
      Client.getPayoff(props.payoffId,(payoff)=>{
        dispatch(
          setEditingPayoff(payoff)
        )
      })
    },
    deleteLineItem:(id)=>{
      Client.deleteLineItem(id,(lineItem)=>{
        Client.getPayoff(lineItem.payoff_id,(payoff)=>{
          dispatch(
            setEditingPayoff(payoff)
          )
        })
      })
    },
    addLineItem:(data)=>{
      Client.createLineItem(data,(lineItem)=>{
        Client.getPayoff(lineItem.payoff_id,(payoff)=>{
          dispatch(
            setEditingPayoff(payoff)
          )
        })
      })
    },
    receivePayment:(data)=>{
      Client.createReceivedPayment(data,(receivedPayment)=>{
        Client.getPayoff(receivedPayment.payoff_id,(payoff)=>{
          dispatch(
            setEditingPayoff(payoff)
          )
        })
      })
    },
    changeStatus:(data)=>{
      Client.changePayoffStatus(data,(payoff)=>{
        Client.getPayoff(payoff.id,(payoff)=>{
          dispatch(
            setEditingPayoff(payoff)
          )
        })
      })
    },

  }
);

const mapStateToEditingPayoffProps = (state)=>(
  {
    editingPayoff:state.editingPayoff,
  }
);

const SinglePayoff = connect(
  mapStateToEditingPayoffProps,
  mapDispatchToEditingPayoffProps,
)(EditingPayoff);



export default SinglePayoff;
