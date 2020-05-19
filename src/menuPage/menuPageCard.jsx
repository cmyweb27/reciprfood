import React from "react";
const MenuCard = ({ price, name }) => {
  return (
    <div className="menuCard">
      <div className="menuHeader">
        {" "}
        <p>price {price} </p>
        <p>name {name} </p>
      </div>
    </div>
  );
};

export default MenuCard;
