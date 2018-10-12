import React from 'react';
import lifecycle from 'react-pure-lifecycle';


const methods = {

  componentDidMount(props){
    props.onMount()
  }
}

const List = (props)=> {
  return  (
    <div>
      <h2>Our List</h2>
      <table id='userTable' className = 'ui celled table'>
        <thead>
          <tr>
            {
              props.columns.map((header, index) => (
                <th key={index}>
                  {header}
                </th>
              ))
            }
          </tr>

        </thead>
        <tbody>
          {
            props.users.map((u, index) => (
              <tr onClick={()=>props.onRowClick(u)}
                key={u.id}>
                <td>
                  {u.first_name}
                </td>
                <td>
                  {u.last_name}
                </td>
                <td>
                  <input type='checkbox' checked={u.admin ? true : false} onChange = { () => props.onUserUpdate(u.id,'admin')}/>
                </td>
                <td>
                  <input type='checkbox'  checked={u.underwriter ? true : false} onChange = { () => props.onUserUpdate(u.id,'underwriter')}/>
                </td>
                <td>
                  <input type='checkbox' checked={u.sales ? true : false} onChange = { () => props.onUserUpdate(u.id,'sales')}/>
                </td>
                <td>
                  <input type='checkbox' checked={u.reviewer ? true : false} onChange = { () => props.onUserUpdate(u.id,'reviewer')}/>
                </td>
                <td>
                  <input type='checkbox' checked={u.dev ? true : false} onChange = { () => props.onUserUpdate(u.id,'dev')}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  );



}

export default lifecycle(methods)(List);
