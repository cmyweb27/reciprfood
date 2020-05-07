import React, { useContext } from "react";
import { context } from "./context";
import Cart from "./Cart";
const CartPage = () => {
  const { cart, cartD, cartF } = useContext(context);

  const handleDelet = (e) => {
    console.log(e, "handledelete");
    let car = [...cart];
    car.map((x, y) => {
      if (x.id === e) {
        car.splice(y, 1);
      }
    });
    cartD(car);
  };
  const addQuantityF = (e) => {
    let car = [...cart];
    console.log(car, "car");
    const fell = car.map((x) => {
      if (x.id === e) {
        let price = x.productPrice / x.quantity;
        x.quantity += 1;
        x.productPrice += price;

        cartF(x);
      }

      return x;
    });
    cartD(fell);
  };
  const minus = (e) => {
    let car = [...cart];
    console.log(car, "car");
    const fell = car.map((x) => {
      if (x.id === e && x.quantity > 1) {
        let price = x.productPrice / x.quantity;
        x.quantity -= 1;
        x.productPrice -= price;

        cartF(x);
      }

      return x;
    });
    cartD(fell);
  };
  return (
    <div>
      {cart.map((x) => (
        <Cart
          name={x.productName}
          price={x.productPrice}
          quantity={x.quantity}
          key={x.id}
          dele={
            <i
              className="trash alternate outline icon large brown"
              onClick={() => handleDelet(x.id)}
            ></i>
          }
          add={
            <button className="ui button" onClick={() => addQuantityF(x.id)}>
              <i className="add icon"></i>
            </button>
          }
          minus={
            <button className="ui button" onClick={() => minus(x.id)}>
              <i className="minus icon"></i>
            </button>
          }
        />
      ))}
    </div>
  );
};

export default CartPage;
