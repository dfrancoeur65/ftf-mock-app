import React from 'react';
import {Route} from 'react-router-dom';
import PayoffsList from './PayoffsList';
import SinglePayoff from './SinglePayoff';


class PayoffsDashboard extends React.Component {

  render(){
    const matchPath = this.props.match.path;

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
}


export default PayoffsDashboard;
