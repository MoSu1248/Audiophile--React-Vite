import React, { useState } from "react";
import CartIcon from "../../assets/shared/desktop/icon-cart.svg";
import "./Cart.scss";
import CartDropdown from "./CartDropdown";

export default function Cart() {
  const [openCart, setOpenCart] = useState(false);

  function close() {
    setOpenCart(false);
  }

  return (
    <div
      className="cart-containter"
      onMouseEnter={() => setOpenCart(true)}
      onMouseLeave={() => setOpenCart(false)}
    >
      <img src={CartIcon} />
      {openCart && (
        <>
          <div
            className="cart-overlay"
            onClick={() => setOpenCart(false)} // optional: click outside to close
          ></div>
          <CartDropdown close={close} />
        </>
      )}
    </div>
  );
}
