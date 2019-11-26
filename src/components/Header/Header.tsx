
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={require('../../assets/logo.png')}/>
      <div>
        <NavLink to="/" exact className="link text-center mr-3" activeClassName="link--selected">
          Sign Up
        </NavLink>
      
        <NavLink to="/subscriptions" className="text-center link" activeClassName="link--selected">
          Subscriptions
        </NavLink>
      </div>
  </div>
  );
}

export default Header;