import React, { useState } from "react";

const Card = () => {
  const [price] = useState("$45.00");
  return (
    <div className="image">
      <img src="images/pizza-1.jpg" alt="rad" />
      <p className="raspberry">Raspberry</p>
      <div className="star">
        <span class="material-icons ">star</span>
        <span class="material-icons ">star</span>
        <span class="material-icons ">star</span>
        <span class="material-icons ">star</span>
        <span class="material-icons ">star</span>
      </div>
      <p className="raspberry">{price}</p>
      <p className="btn">
        <i class="material-icons">shopping_cart</i>
        <a href className="anchor">
          Add to Cart
        </a>
      </p>
    </div>
  );
};

export default Card;
