import React from 'react';
import './App.css';
import './bootstrap-grid.css';
import { Switch, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import SignUp from './containers/SignUp/SignUp';
import Header from './components/Header/Header';
import SubscriptionList from './containers/SubscriptionList/SubscriptionList';

// TODO: Pull out routes into object to iterate
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <SignUp></SignUp>
          </Route>
          <Route exact path="/subscriptions">
            <SubscriptionList></SubscriptionList>
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
