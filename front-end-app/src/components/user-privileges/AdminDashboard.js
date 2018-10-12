import React, {Component} from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
import UserView from './UserView';


class AdminDashboard extends Component {

  state = {
    formOpen:false,
    userSelected: true,
    selectedUser:{
      first_name: 'Daniel',
      last_name:'Francoeur',
      created_at:'xx-yy-zz' ,
      updated_at:'xx-yy-zz',
    },
  }

  handleRowClick = (user) =>{
    this.setState({
      userSelected:true,
      selectedUser:user
    })
  }
  handleFormSwitch = () =>{
    this.setState({
      formOpen: this.state.formOpen = !this.state.formOpen
    })
  }

  render(){
    return(
    <div className='ui two column divided grid'>
      <div className = 'ten wide column'>
        <UserList
          onRowClick={this.handleRowClick}
          />
      </div>
      <div className = 'six wide column'>
      <div className='spacer row'/>
        <div className = 'row'>
          <UserForm
            onFormSwitch={this.handleFormSwitch}
            formOpen = {this.state.formOpen}
          />
        </div>
        <div className = 'row'>
          <UserView
            user={this.state.selectedUser}
            userSelected={this.state.userSelected}
          />
        </div>
    </div>
    </div>
      );
  }
}

export default AdminDashboard;
