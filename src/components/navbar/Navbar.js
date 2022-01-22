import React from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.jpg";
function Navbar(props) {
  return (
    <nav className="nav">
      <section className="nav__logo">
        <img src={logoImg} alt="avatar-img" />
      </section>
      <section className="nav__links">
        <ul className="nav__items">
          <li className="nav__items-item">
            <Link to="/" exact activeClassName="selected">
              Home
            </Link>
          </li>
          <li className="nav__items-item">
            <Link to="/about" exact activeClassName="selected">
              About
            </Link>
          </li>
          <li className="nav__items-item">
            <Link to="/gallery" exact activeClassName="selected">
              Gallery
            </Link>
          </li>
          <li className="nav__items-item">
            <Link to="/contact" exact activeClassName="selected">
              Contact
            </Link>
          </li>
          <li className="nav__items-item">
            <br />
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
