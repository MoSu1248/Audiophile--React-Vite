import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
import MobileMenuIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import MobileNav from "../MobileNav/MobileNav";
import "./Navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function MobileClickHandler() {
    setOpen(!open);
    document.querySelector("body").classList.toggle("disabled");
  }

  return (
    <header className="navbar">
      {open && <MobileNav setOpen={MobileClickHandler} />}
      <div className=" wrapper navbar__container">
        <img
          className="mobile__icon"
          src={MobileMenuIcon}
          alt=""
          onClick={() => {
            MobileClickHandler();
          }}
        />
        <Logo />
        <Nav />
        <Cart />
      </div>
    </header>
  );
}
