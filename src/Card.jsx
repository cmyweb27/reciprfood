import React, { useState, useContext } from "react";
import { context } from "./context";
const Card = ({ image, price, name, but2 }) => {
  const [cartClick, setCartClick] = useState(false);
  const { item, addItem } = useContext(context);

  const handle = () => {
    setCartClick(true);
  };
  return (
    <div className="contain">
      <img src={image} alt="rad" />

      {cartClick ? (
        <div>
          <p className="raspberry">{name}</p>

          <div className="raspberry">
            <span>
              <span>&#8358;</span>
              {price}
            </span>
          </div>
          <div>{but2}</div>
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
              className="ui brown fluid right labeled icon button"
              onClick={handle}
            >
              Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
