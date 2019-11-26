import React from 'react';
import './App.css';
import './bootstrap-grid.css';
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import SignUp from './containers/SignUp';
import SubscriptionList from './containers/SubscriptionList';

const App: React.FC = () => {
  return (
      <React.Fragment>
          
          <div className="header">
            <div className="header__inner col-8 text-center">

            <NavLink to="/" exact className="link text-center col-6" activeClassName="link--selected">
              Sign Up
            </NavLink>
          
            <NavLink to="/subscriptions" className="text-center link col-6" activeClassName="link--selected">
              Subscriptions
            </NavLink>
            </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact path='/'> 
              <SignUp></SignUp>
            </Route>
            <Route exact path='/subscriptions'>
              <SubscriptionList></SubscriptionList>
            </Route>
          </Switch>
        </div>
      </React.Fragment>
  );
}

export default App;
