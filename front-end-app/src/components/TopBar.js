import React from 'react';
import {Route, NavLink, Link} from 'react-router-dom';


const TopBar = () => (
<div>
  <div
    className = 'ui huge top attached fluid secondary menu'
    >
    <Route path = '/' component={()=>(
        <div>

        <div className = 'ui item'>
          <h1
            className = 'ui blue header'
            style={ {marginTop:'10px'}}
            ><Link to='/'>Welcome to Fund That Flip</Link>
          </h1>
        </div>
    <div className='ui secondary horizontal menu'>
      <NavLink
        className = 'ui item'
        to='/payoffs'
        >Payoffs Dashboard
      </NavLink>
    </div>
  </div>
  )}
  />
  </div>
</div>

);

export default TopBar;
