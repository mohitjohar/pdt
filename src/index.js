import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router1 } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Inspections from './pages/Inspections';
import Map from './pages/Map';
import AddUser from './pages/AddUser';
import Detail from './pages/Detail';

const routing = (
  <>
    <Router1>
      <Route exact path="/" component={Login} />
      <Route exact path="/detail" component={Detail} />
      <Route exact path="/adduser" component={AddUser} />
      <Route exact path="/inspections" component={Inspections} />
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
