import { useContext } from "react";
import { CartContext } from "../CartProvider/CartProvider";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import "./CartDropdown.scss";
import CartFooter from "./CartFooter";

export default function CartDropdown({ close }) {
  const { cart, removeAll, updateQuantity, removeItem } =
    useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  function formatNumber(num) {
    (999).toLocaleString();
    (1000).toLocaleString();
    (29999).toLocaleString();
    return num.toLocaleString("en-US");
  }

  function increase(id, quantity) {
    updateQuantity(id, quantity + 1);
  }

  function decrease(id, quantity) {
    if (quantity > 1) updateQuantity(id, quantity - 1);
    else {
      removeItem(id);
    }
  }

  function removeItems() {
    removeAll();
  }

  return (
    <div className="cart__container" onMouseLeave={close}>
      <CartHeader remove={removeItems} cart={cart} />
      <div
        className={
          cart.length >= 4 ? "cart__list cart__list-padding" : "cart__list"
        }
      >
        {cart.length === 0 ? (
          <div className="cart__empty">
            <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                className="cart-icon"
                fill-rule="nonzero"
              />
            </svg>
            <p>Your cart is empty</p>
          </div>
        ) : (
          cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              decrease={decrease}
              increase={increase}
              formatNumber={formatNumber}
            />
          ))
        )}
      </div>
      <CartFooter formatNumber={formatNumber} total={total} close={close} />
    </div>
  );
}
