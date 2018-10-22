import React from 'react';
import {Route, NavLink, Link} from 'react-router-dom';


const TopBar = () => (
  <Route
    path = '/'
    component={()=>(
      <div>
        <h1
          className = 'ui blue header'
          style={ {marginTop:'10px'}}
          >
          <Link to='/'>
            Welcome to Funding That Finished RE
          </Link>
        </h1>
        <div className='ui menu'>
          <NavLink
            className = 'ui item'
            to='/payoffs'
            >Payoffs Dashboard
          </NavLink>
          <NavLink
            className = 'ui item'
            to='/deals'
            >Deals
          </NavLink>
        </div>
      </div>
    )}
    />
);

export default TopBar;
