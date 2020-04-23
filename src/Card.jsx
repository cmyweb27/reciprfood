import React from "react";

const Card = ({ image, price, name }) => {
  return (
    <div className="container image">
      <img src={image} alt="rad" />

      <p className="raspberry">{name}</p>

      <p className="raspberry">
        <span>&#8358;</span>
        {price}
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
