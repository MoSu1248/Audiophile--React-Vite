import React, { useState } from "react";
import Nav from "./Nav";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
import MobileMenuIcon from "../../assets/shared/tablet/icon-hamburger.svg";
import MobileNav from "../MobileNav/MobileNav";
import "./Navbar.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className=" wrapper navbar__container">
      {/* {open && <MobileNav />} */}
        <img
          className="mobile__icon"
          src={MobileMenuIcon}
          alt=""
          onClick={() => {
            setOpen(!open);
          }}
        />
        <Logo />
        <Nav />
        <Cart />
      </div>
    </header>
  );
}
