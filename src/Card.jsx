import React, { useState } from "react";

const Card = ({ image, price, name }) => {
  const [cartClick, setCartClick] = useState(false);
  const handle = () => {
    setCartClick(true);
  };
  return (
    <div className="contain">
      <img src={image} alt="rad" />
      {cartClick ? (
        <div>
          <p className="raspberry">{name}</p>

          <p className="raspberry">
            <span>&#8358;</span>
            {price}
          </p>
          <div className="but1">
            <i className="green big check icon"></i>
          </div>
          <div className="but">
            <div className="ui vertical  buttons">
              <button className="ui  brown button">View Cart</button>
              <button className=" ui button">Continue Shopping</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p className="raspberry">{name}</p>

          <p className="raspberry">
            <span>&#8358;</span>
            {price}
          </p>

          <div className="but">
            <button
              class="ui brown fluid right labeled icon button"
              onClick={handle}
            >
              <i class="cart icon "></i>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
