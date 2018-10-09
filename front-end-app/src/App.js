import React, { Component } from 'react';
import { Provider} from 'react-redux';
import {createStore} from 'redux';
import {Route} from 'react-router-dom';
import './App.css';
import "./semantic-dist/semantic.min.css";
import TopBar from './components/TopBar'
import Reducer from './redux/modules/Reducer';
import PayoffsDashboard from './components/payoffs/PayoffsDashboard';

const userStore = createStore(Reducer);

class App extends Component {

  render() {
    return (
      <div className = 'ui container'>
        <div className = 'ui grid'>
           <TopBar />
          <div className='spacer row'/>
          <div className='row'>
            <Route path='/payoffs' component={PayoffsDashboard}/>

          </div>
        </div>
      </div>

    );
  }
}


const WrappedApp = () => (
  <Provider store = {userStore}>
    <App />
  </Provider>
);

export default WrappedApp;
