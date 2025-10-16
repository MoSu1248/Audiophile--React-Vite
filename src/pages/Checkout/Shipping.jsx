import React, { useContext } from "react";
import { CheckoutContext } from "../../components/CheckOutProvider/CheckOutProvider";
import { CartContext } from "../../components/CartProvider/CartProvider";


export default function Shipping() {
  const { shipping, setShipping, errors } = useContext(CheckoutContext);
  return (
    <div className="form-section">
      <p className="form__header">Shipping Info</p>
      {errors.name && <p className="error">{errors.name}</p>}
      <div className="form__grid-container">
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            className="form-input"
            value={shipping.address || ""}
            onChange={(e) =>
              setShipping({ ...shipping, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label htmlFor="zip">ZIP Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            placeholder="ZIP code"
            className="form-input"
            value={shipping.zip || ""}
            onChange={(e) =>
              setShipping({ ...shipping, [e.target.name]: e.target.value })
            }
          />
          {errors.zip && <p className="error">{errors.zip}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City"
            className="form-input"
            value={shipping.city || ""}
            onChange={(e) =>
              setShipping({ ...shipping, [e.target.name]: e.target.value })
            }
          />
          {errors.city && <p className="error">{errors.city}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Country"
            className="form-input"
            value={shipping.country || ""}
            onChange={(e) =>
              setShipping({ ...shipping, [e.target.name]: e.target.value })
            }
          />
          {errors.country && <p className="error">{errors.country}</p>}
        </div>
      </div>
    </div>
  );
}
