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
          <p>Your cart is empty</p>
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
