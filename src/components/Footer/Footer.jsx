import React from "react";
import Nav from "../Navbar/Nav";
import Logo from "../Logo/Logo";
import "./Footer.scss";
import Socials from "./Socials";
import Copyright from "./copyright";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="orange-bar"></div>
      <div className="wrapper">
        <div className="footer__navbar">
          <Logo />
          <Nav />
        </div>

        <div className="footer__content">
          <p className="goal">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <Socials />
        </div>
        <Copyright />
      </div>
    </footer>
  );
}
