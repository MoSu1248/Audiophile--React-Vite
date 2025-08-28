import React from "react";
import Nav from "./Nav";
import Logo from "../Logo/Logo";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className=" wrapper navbar__container">
        <Logo />
        <Nav />
        <Cart />
      </div>
    </header>
  );
}
