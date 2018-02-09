import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import configureStore from '../store/koPoolStore';
import KOPoolContainer from '../containers/KOPoolContainer';
import LoginFormContainer from '../containers/LoginFormContainer'
import RegisterFormContainer from '../containers/RegisterFormContainer'


const fakeAuth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100) // fake async
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100)
  }
};

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true ?
      <Component {...props} />
    :
      <Redirect to='/login' />
  )} />
);

const UnauthenticatedRoute = ({ component: Component, ...rest}) => (
  // Only allow users to go to this route if they aren't authenticated
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true ?
      <Redirect to='/' />
      :
      <Component {...props} />
  )} />
);

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const KOPoolApp = (props) => (
  <Provider store={configureStore(props)}>
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={KOPoolContainer} />
        <UnauthenticatedRoute path="/login" component={LoginFormContainer} />
        <UnauthenticatedRoute path="/register" component={RegisterFormContainer} />
      </Switch>
    </Router>
    {/*<KOPoolContainer />*/}
  </Provider>
);

export default KOPoolApp;