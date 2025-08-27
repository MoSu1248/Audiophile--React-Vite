import { useContext } from "react";
import { CartContext } from "../CartProvider/CartProvider";
import "./CartDropdown.scss";

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
      <div className="cart__header">
        <h6>Cart ({cart.length})</h6>
        <button
          className={cart.length === 0 ? "hidden" : "remove-all__btn"}
          onClick={removeItems}
        >
          Remove All
        </button>
      </div>
      <div className="cart__list">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart__item">
              <img src={item.image} alt="" className="cart__item-image" />
              <div className="cart__item-info">
                <p className="cart__item-name">{item.itemName}</p>
                <p className="cart__item-price">$ {formatNumber(item.price)}</p>
              </div>
              <div className="counter">
                <button
                  className={item.quantity <= 1 ? "btn " : "btn "}
                  onClick={() => decrease(item.id, item.quantity)}
                >
                  −
                </button>
                <span className="count">{item.quantity}</span>
                <button
                  className="btn "
                  onClick={() => increase(item.id, item.quantity)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart__footer">
        <div className="cart__total">
          <p>Total</p>
          <p className="cart__total-value">$ {formatNumber(total)}</p>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
