import React, { useContext } from "react";
import MenuCard from "./menuPageCard";
import { context } from "../context";
import "./menupage.css";
const MenuPage = () => {
  const { data } = useContext(context);
  console.log(data, "in menu page");
  return (
    <div>
      <h1>in menu page</h1>
      <div className="wrap">
        {data.map((x) => (
          <MenuCard price={x.productPrice} key={x.id} name={x.productName} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
