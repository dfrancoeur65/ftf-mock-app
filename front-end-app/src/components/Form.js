import React from 'react';
import Client from './Client'



class Form extends React.Component {
  state = {
    person:{
      first_name:"",
      last_name:"",
      email:"",
      admin:false,
      underwriter:false,
      sales:false,
      reviewer:false,
    },
    fieldErrors:{}
  }

  handleFormSubmit = ()=>{
    this.props.onFormSubmit(this.state.person)
    this.setState({
      person:{
        first_name:"",
        last_name:"",
        email:"",
        admin:false,
        underwriter:false,
        sales:false,
        reviewer:false,
      },
    });
  }

  onInputChange = evt => {
    const person = Object.assign({},this.state.person);

    if(evt.target.type==="checkbox"){
      person[evt.target.name] = evt.target.checked
    }else {
      person[evt.target.name] = evt.target.value;
    }
    this.setState({person});
  }

  render(){
    const person = this.state.person;
    return(
      <div className='ui segments'>
        {
          this.props.formOpen ? (
            <div className= 'ui segment'>
              <h1>Add new user</h1>
              <button className='ui button' onClick={this.props.onFormSwitch}>
                Close Form
              </button>
              <form>
                <div className='ui input'>
                  <input
                    placeholder='First Name'
                    value={person.first_name}
                    onChange={this.onInputChange}
                    name='first_name'
                    />
                  <span style={{color: 'red'}}>{this.state.fieldErrors.first_name}</span>
                </div>
                <br />
                <br />
                <div className='ui input'>
                  <input
                    placeholder='Last Name'
                    value={person.last_name}
                    onChange={this.onInputChange}
                    name='last_name'
                    />
                  <span style={{color: 'red'}}>{this.state.fieldErrors.last_name}</span>
                </div>
                <br  />
                <br />
                <div className='ui input'>
                  <input
                    placeholder='Email'
                    value={person.email}
                    onChange={this.onInputChange}
                    name='email'
                    />
                  <span style={{color: 'red'}}>{this.state.fieldErrors.email}</span>
                </div>
                <br />
                <br />
                <br/><label>admin</label>
                <input name='admin' type='checkbox' checked={person.admin ? true : false} onClick = {this.onInputChange}/>
                <br/><label>underwriter</label>
                <input name='underwriter' type='checkbox' checked={person.underwriter ? true : false} onClick = { this.onInputChange}/>
                <br/><label>sales</label>
                <input name='sales' type='checkbox' checked={person.sales ? true : false} onClick = { this.onInputChange}/>
                <br/><label>reviewer</label>
                <input name='reviewer' type='checkbox' checked={person.reviewer ? true : false} onClick = {this.onInputChange}/>
                <br/>
                <label>dev</label>
                <input name='dev' type='checkbox' checked={person.dev ? true : false} onClick = {this.onInputChange}/>
                <br/>
                <br/>
                <input
                  className='ui button'
                  type='submit'
                  onClick =  {(e)=>{
                    e.preventDefault();
                    this.handleFormSubmit(e);}} />

                </form>

              </div>
            ) : (
              <div className='ui segment'>
                <button className='ui button' onClick={this.props.onFormSwitch}>Add New User</button>
              </div>
            )
          }
        </div>
      );
    }
  }

  export default Form;
