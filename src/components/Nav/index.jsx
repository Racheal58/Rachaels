import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Nav = ({ children }) => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">
        Rachaels
      </Link>
      <div className="d-flex">{children}</div>
    </nav>
  );
};

export default Nav;
