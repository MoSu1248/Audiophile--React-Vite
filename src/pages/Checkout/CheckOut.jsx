import React, { useContext, useState } from "react";
import Summary from "./Summary";
import Form from "./Form";
import GoBackButton from "../../components/BackBtn/GoBackButton";
import { CheckoutContext } from "../../components/CheckOutProvider/CheckOutProvider";
import "./CheckOut.scss";
import { CartContext } from "../../components/CartProvider/CartProvider";
import CheckOutConfirmation from "./CheckOutConfirmation";

export default function CheckOut() {
  const {
    details,
    shipping,
    payment,
    setErrors,
    setPayment,
    setShipping,
    setDetails,
  } = useContext(CheckoutContext);

  const { removeAll } = useContext(CartContext);
  const newErrors = {};
  const [openConfirmation, setOpenConfirmation] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!details.name) newErrors.name = "Name required";
    if (!shipping.address) newErrors.address = "Address required";
    if (!payment.method) newErrors.method = "Select payment method";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setOpenConfirmation(true);
    }
  }

  function handleClose() {
    setDetails({ name: "", email: "", phone: "" });
    setShipping({ address: "", zip: "", city: "", country: "" });
    setPayment({ method: "", moneyNo: "", pin: "" });
    removeAll();
  }

  return (
    <section className="checkOut">
      {openConfirmation && <CheckOutConfirmation handleClose={handleClose} />}
      <div className="wrapper">
        <GoBackButton />
        <form className="checkOut__container" onSubmit={handleSubmit}>
          <Form />
          <Summary />
        </form>
      </div>
    </section>
  );
}
