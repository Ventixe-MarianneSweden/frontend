import React from 'react'
import '../../styles/layout.css';
import '../../styles/header.css';

const Header = ({ title }) => {
  return (
    <div className="header-wrapper">
      <h1 className="page-title">{title}</h1>
    </div>
  );
};

export default Header;
