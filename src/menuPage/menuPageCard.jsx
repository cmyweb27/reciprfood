import React, { useContext, useEffect } from "react";
import style from "./menupage.module.css";
import { context } from "../context";
const MenuCard = ({ price, name, content, id }) => {
  const { data, basket, itemBasket } = useContext(context);
  const order = (e) => {
    data.map((x) => (x.id === e && x ? itemBasket(x) : null));
    console.log(basket, "been clicked");
  };

  return (
    <div className={style.menuCard}>
      <div className={style.menuHeader}>
        {" "}
        <h2 className={`${style.h3} ${style.name}`}> {name} </h2>
        <h3 className={style.h3}>
          {" "}
          <span>&#8358;</span>
          {price}{" "}
        </h3>
      </div>
      <div className={style.contentDiv}>
        {" "}
        {content.map((x) => (
          <p key={x} className={style.contentP}>
            {x}
          </p>
        ))}
      </div>
      <div className={style.contentButton}>
        <button onClick={() => order(id)} className="ui brown fluid button">
          Order
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
