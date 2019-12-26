import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router1 } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Map from './pages/Map';

const routing = (
  <>
    <Router1>
      <Route exact path="/" component={Login} />
      <Route exact path="/map" component={Map} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/login" component={Login} />
    </Router1>
  </>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
