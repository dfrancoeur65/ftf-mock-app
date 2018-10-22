import React from 'react';

const UserView = ({user, userSelected}) =>
(
  <div className='ui segment'>
    <div className='ui segment'>
    { userSelected ? (
        <table>
          <thead>
            <tr>
              <th colSpan="2">User Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>Name:
            </td>
            <td>
            {user.first_name+" "+user.last_name}
            </td>
            </tr>
            <tr>
            <td>Last Updated:
            </td>
            <td>
            {user.updated_at}
            </td>
            </tr>
          </tbody>
        </table>
    ) : (
      <div>

      </div>
    )}

    </div>
  </div>

);

  export default UserView;
