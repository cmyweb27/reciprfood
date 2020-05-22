import React from "react";
import style from "./menupage.module.css";
const MenuCard = ({ price, name, content }) => {
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
          <p key={x} className={style.p}>
            {x}
          </p>
        ))}
      </div>
      <div className={style.contentButton}>
        <button className="ui brown fluid button">Order</button>
      </div>
    </div>
  );
};

export default MenuCard;
