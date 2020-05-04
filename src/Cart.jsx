import React, { useContext } from "react";
import { context } from "./context";
const Cart = () => {
  const data = useContext(context);
  console.log(data, "data in cart");
  return (
    <div>
      <h1>{data.cart} is in cart</h1>
    </div>
  );
};

export default Cart;
