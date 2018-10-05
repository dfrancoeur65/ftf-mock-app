import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WrappedApp from './App';
import registerServiceWorker from './registerServiceWorker';
import "./semantic-dist/semantic.min.css";
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <WrappedApp />
  </Router>
    , document.getElementById('root'));
registerServiceWorker();
