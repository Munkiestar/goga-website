import React, { useEffect, useState } from "react";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.jpg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav">
      {!isOpen ? (
        <MenuIcon onClick={handleToggleBtn} className="menuBtn" />
      ) : (
        <CloseIcon onClick={handleToggleBtn} className="closeBtn" />
      )}
      <section className="nav__logo">
        <img src={logoImg} alt="avatar-img" />
      </section>
      <section className="nav__links">
        <ul className={`nav__items ${!isOpen ? "hideMenu" : "showMenu"}`}>
          <li className="nav__items-item">
            <Link to="/" onClick={handleToggleBtn}>
              Početna
            </Link>
          </li>
          <li className="nav__items-item">
            <Link to="/o-nama" onClick={handleToggleBtn}>
              O nama
            </Link>
          </li>
          <li className="nav__items-item">
            <Link to="/galerija" onClick={handleToggleBtn}>
              Katalog
            </Link>
          </li>
          <li className="nav__items-item">
            <Link to="/kontakt" onClick={handleToggleBtn}>
              Kontakt
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
