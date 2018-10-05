
import List from './List';
import {connect } from 'react-redux';

import {setInitialUsers, updateUser} from '../redux/modules/UsersReducer';
import Client from './Client';


const mapStateToListProps = (state) =>(
  {
    columns:state.columns,
    users:state.users,
  }
);

const mapDispatchToListProps = (dispatch, props) =>(
  {
    onUserUpdate: (id,role) => (
      dispatch(
        updateUser(id,role)
      )
    ),
    onMount:()=>Client.getUsers(
      (users)=>(
        dispatch(
          setInitialUsers(users)
        )
      )
    ),
    onRowClick: (user) =>props.onRowClick(user),

    dispatch: dispatch,
  }
);


const UserList = connect(
  mapStateToListProps,
  mapDispatchToListProps,
  //merge
)(List)

export default UserList;
