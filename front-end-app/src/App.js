import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route } from 'react-router-dom';
import './App.css';
import './semantic-dist/semantic.min.css';
import logger from 'redux-logger';
import TopBar from './components/TopBar';
import Reducer from './redux/modules/Reducer';
import PayoffsDashboard from './components/payoffs/PayoffsDashboard';
import DealsDashboard from './components/deals/DealsDashboard';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(Reducer);

const App = () => (
  <div className="ui container">
    <div className="ui grid">
      <TopBar />
      <div className="spacer row" />
      <div className="row">
        <Route path="/payoffs" component={PayoffsDashboard} />
        <Route path="/deals" component={DealsDashboard} />
      </div>
    </div>
  </div>

);


const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WrappedApp;
