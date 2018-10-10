import {connect} from 'react-redux';
import {setEditingPayoff} from '../../redux/modules/EditingPayoffReducer';
import EditingPayoff from './EditingPayoff';
import Client from '../../api/Client';

const mapDispatchToEditingPayoffProps = (dispatch,props)=>(
  {
    onMount:(payoffId) =>{
      Client.getPayoff(payoffId,(payoff)=>{
        dispatch(
          setEditingPayoff(payoff)
        )
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
