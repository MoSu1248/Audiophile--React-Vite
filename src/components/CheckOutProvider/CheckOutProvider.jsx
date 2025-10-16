import React, { createContext, useState } from "react";

const CheckoutContext = createContext();

function CheckoutProvider({ children }) {
  const [details, setDetails] = useState({});
  const [shipping, setShipping] = useState({});
  const [payment, setPayment] = useState({});
  const [errors, setErrors] = useState({});

  const value = {
    details,
    setDetails,
    shipping,
    setShipping,
    payment,
    setPayment,
    errors,
    setErrors,
  };

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
}

export { CheckoutContext, CheckoutProvider };
