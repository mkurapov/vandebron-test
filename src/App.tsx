import React from 'react';
import './App.css';
import './bootstrap-grid.css';
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import SignUp from './containers/SignUp';
import SubscriptionList from './containers/SubscriptionList';


// TODO: Pull out routes into object to iterate
const App: React.FC = () => {
  return (
      <React.Fragment>
          
          <div className="header">
              <img className="header__logo" src={require('./assets/logo.png')}/>
              <div>
                <NavLink to="/" exact className="link text-center mr-3" activeClassName="link--selected">
                  Sign Up
                </NavLink>
              
                <NavLink to="/subscriptions" className="text-center link" activeClassName="link--selected">
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
