import React, { useContext } from "react";
import MenuCard from "./menuPageCard";
import { context } from "../context";
import styles from "./menupage.module.css";
const MenuPage = () => {
  const { data } = useContext(context);
  console.log(data, "in menu page");
  return (
    <div>
      <h1 className={styles.title}>in menu page</h1>
      <div className={styles.wrap}>
        {data.map((x) => (
          <MenuCard price={x.productPrice} key={x.id} name={x.productName} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
