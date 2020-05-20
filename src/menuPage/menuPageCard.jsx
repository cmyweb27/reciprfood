import React from "react";
import style from "./menupage.module.css";
const MenuCard = ({ price, name }) => {
  return (
    <div className={style.menuCard}>
      <div className="menuHeader">
        {" "}
        <h3> {name} </h3>
        <h3> {price} </h3>
      </div>
    </div>
  );
};

export default MenuCard;
