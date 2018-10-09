import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import PayoffsList from './PayoffsList';
import EditingPayoff from './EditingPayoff';


class PayoffsDashboard extends React.Component {

  render(){
    const matchPath = this.props.match.path;

    return (
      <div className='ui column'>
        <Route
          exact path = '/payoffs'
          component = {()=>(
            <PayoffsList
              payoffsPathname = {matchPath}
              />
          )}
          />
          <Route
            path={`/payoffs/:payoffId`}
            component ={({match})=>{
            return(
              <EditingPayoff
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
