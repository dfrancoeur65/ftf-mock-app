import React from 'react';
import {Route} from 'react-router-dom';
import PayoffsList from './PayoffsList';
import SinglePayoff from './SinglePayoff';


const PayoffsDashboard = ()=>{
  return (
    <div className='ui column'>
      <Route
        exact path = '/payoffs'
        component = {()=>(
          <PayoffsList/>
        )}
        />
      <Route
        path={'/payoffs/:payoffId'}
        component ={({match})=>{
          return(
            <SinglePayoff
              payoffId = {match.params.payoffId}
              />
          );
        }
      }
      />
  </div>
);
}


export default PayoffsDashboard;
