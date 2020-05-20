import React from "react";
const MenuCard = ({ price, name }) => {
  return (
    <div className="menuCard">
      <div className="menuHeader">
        {" "}
        <h3> {name} </h3>
        <h3> {price} </h3>
      </div>
    </div>
  );
};

export default MenuCard;
