import React, { useContext } from "react";
import MenuCard from "./menuPageCard";
import { context } from "../context";
import styles from "./menupage.module.css";
const MenuPage = () => {
  const { data } = useContext(context);
  console.log(data, "in menu page");
  return (
    <div className={styles.menu}>
      <h1 className={styles.title}>in menu page</h1>
      <div className={styles.wrap}>
        {data.map((x) => (
          <MenuCard
            price={x.productPrice}
            key={x.id}
            name={x.productName}
            content={x.content}
          />
        ))}
      </div>
      <div>
        <h3 className={styles.catering}>Event Catering</h3>
        <p className={styles.catering}>
          We also cater to outdoor and indoor events and social gatherings. For
          enquiries, please call 08035465977
        </p>
      </div>
      <div className={styles.location}>
        <h3 className={styles.catering}>Location</h3>
        <p className={styles.catering}>
          Admiral Ayinla Drive, Off Freedom Way, Lekki Phase 1. (Esporta Hotel)
          09060006799/ 07067530935
        </p>
      </div>
      <div className={styles.menuFooterIcons}>
        <div>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
        </div>
      </div>
      <div className={styles.menuFooterTrademark}>
        <p className={styles.p}>Sv-LunchBox| All Rights Reserved</p>
        <p className={styles.p}>Produced by Carlo</p>
      </div>
    </div>
  );
};

export default MenuPage;
