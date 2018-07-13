import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <nav className="light-blue lighten-1" role="navigation">
    <div className="nav-wrapper container">
      <Link id="logo-container" className="brand-logo" to="/">
        Home
      </Link>

      <ul className="right hide-on-med-and-down">
        <li>
          <Link to="/campuses/">Campuses</Link>
        </li>
        <li>
          <Link to="/students/">Students</Link>
        </li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
        <li>
          <Link to="/campuses/">Campuses</Link>
        </li>
        <li>
          <Link to="/students/">Students</Link>
        </li>
      </ul>
      <a
        href="#"
        data-target="nav-mobile"
        className="sidenav-trigger btn-floating btn-large teal"
      >
        <i className="material-icons">menu</i>
      </a>
    </div>
  </nav>
);

export default NavBar;
