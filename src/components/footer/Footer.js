import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { getYear } from "../../helpers";
import insta from "../../assets/instagram-color.svg";
import face from "../../assets/facebook-app.svg";
import email from "../../assets/gmail-tile.svg";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__upper">
        <span className="footer__upper-left">
          <span>Love by Goga</span> <CopyrightIcon />
          <span>Sva prava zadržana {getYear()}</span>
        </span>

        <section className="footer__upper-right">
          <a
            href="https://www.facebook.com/LovebyGoga"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={face}
              alt="facebook"
              className="MuiSvgIcon-root facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/stories/lovebygoga"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={insta}
              className="MuiSvgIcon-root instagram"
              alt="instagram"
            />
          </a>
          <a href="/kontakt">
            <img src={email} className="MuiSvgIcon-root email" alt="email" />
          </a>
        </section>
      </section>

      <span className="footer__bottom">
        Made with <FavoriteIcon /> by Igor
      </span>
    </footer>
  );
}

export default Footer;
