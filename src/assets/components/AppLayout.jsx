import React from 'react'
import Header from './Header'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import '../../styles/layout.css'
import '../../styles/header.css'

import { Outlet, useLocation } from 'react-router-dom';

const AppLayout = () => {
  const location = useLocation();

  const getTitle = () => {
    if (location.pathname.startsWith('/events/booking')) return 'Payment';
    if (location.pathname.startsWith('/events/')) return 'Event Details';
    if (location.pathname === '/list') return 'Events';
    return 'Events';
  };

  return (
    <div className="app-grid">
      <aside><Nav /></aside>

      <header className="header">
        <Header title={getTitle()} />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AppLayout;
