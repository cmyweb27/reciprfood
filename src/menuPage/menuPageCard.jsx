import React from "react";
const MenuCard = ({ price, name }) => {
  return (
    <div className="menuCard">
      <div className="menuHeader">
        <p>name {name} </p>
        <p>price {price} </p>
      </div>
    </div>
  );
};

export default MenuCard;
