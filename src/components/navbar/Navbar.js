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
            <Link to="/">Pocetna</Link>
          </li>
          <li className="nav__items-item">
            <Link to="/o-nama">O nama</Link>
          </li>
          <li className="nav__items-item">
            <Link to="/galerija">Katalog</Link>
          </li>
          <li className="nav__items-item">
            <Link to="/kontakt">Kontakt</Link>
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
