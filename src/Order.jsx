import React from "react";
import SignUp from "./forms/signup/SignUp";
import CartPage from "./cartPage";
const Order = () => {
  return (
    <div className="orderpage">
      <CartPage />
      <SignUp />
    </div>
  );
};

export default Order;
