import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/nav.css';

const Nav = () => {
  return (
    <nav className="sidebar-nav">
      <div className="nav">
        <div className="logo-wrapper">
          <img src="/images/LogoVentixe.svg" alt="Ventixe logo" className="logo" />
        </div>

        <div className="nav-menu">
          <NavLink to="/" className="nav-link">
            <img src="/images/Ticket.svg" alt="Ticket icon" className="icon" />
            <span>Events</span>
          </NavLink>
        </div>
      </div>


      <NavLink to="/logout" className="signout-link">
        <img src="/images/SignOut.svg" alt="Logout icon" className="icon" />
        <span>Sign Out</span>
      </NavLink>


    </nav>
  );
};

export default Nav;
