import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="navigation-bar d-flex">
      <h1>Bookstore</h1>
      <ul className="d-flex">
        <li>
          <Link to="/" exact> BOOKS </Link>
        </li>
        <li>
          <Link to="/categories"> CATEGORIES </Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Header;
