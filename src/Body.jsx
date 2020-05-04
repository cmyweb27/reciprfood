import React, { useContext, useState, useEffect } from "react";
import Card from "./Card";
import { context } from "./context";
import { Link } from "react-router-dom";

const Body = () => {
  const { data, item, addItem } = useContext(context);

  const addQuantityF = (e) => {
    const fell = item.map((x) => {
      if (x.id === e) {
        x.quantity = x.quantity + 1;
      }
      return x;
    });
    addItem(fell);
  };
  const subtractQuantityF = (e) => {
    const fell = item.map((x) => {
      if (x.id === e && x.quantity > 1) {
        x.quantity = x.quantity - 1;
      }
      return x;
    });
    addItem(fell);
  };
  return (
    <div className="wrapper">
      {data.map((x, y) => (
        <div key={x.id}>
          <Card
            image="images/pizza-3.jpg"
            price={x.productPrice * x.quantity}
            name={x.productName}
            but={
              <Link to="./Cart">
                <button className="ui  brown button">View Cart</button>
              </Link>
            }
            but2={
              <div className="but">
                <div className="ui icon brown compact basic fluid buttons">
                  <button
                    className="ui button"
                    onClick={() => subtractQuantityF(x.id)}
                  >
                    <i className="minus icon"></i>
                  </button>
                  <button className="ui button">{x.quantity}</button>
                  <button
                    className="ui button"
                    onClick={() => addQuantityF(x.id)}
                  >
                    <i className="add icon"></i>
                  </button>
                </div>
                <button className="ui  fluid brown button">View Cart</button>
              </div>
            }
          />
        </div>
      ))}
    </div>
  );
};

export default Body;
