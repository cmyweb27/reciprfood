import React, { useState } from "react";
import faker from "faker";
const Card = (props) => {
  const [price] = useState("45.00");
  return (
    <div className="container image">
      <img src={props.image} alt="rad" />
      <p className="raspberry">{faker.commerce.product()}</p>

      <p className="raspberry">
        {" "}
        <span>&#8358;</span>
        {faker.commerce.price()}
      </p>
      <p className="btn">
        <i className="material-icons">shopping_cart</i>
        <a href="#" className="anchor">
          Add to Cart
        </a>
      </p>
    </div>
  );
};

export default Card;
