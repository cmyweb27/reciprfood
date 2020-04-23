import React, { useContext } from "react";
import Card from "./Card";
import { context } from "./context";

const Body = () => {
  const mix = useContext(context);

  return (
    <div className="wrapper">
      {mix.map((x) => (
        <div key={x.id}>
          <Card
            image="images/pizza-3.jpg"
            price={x.productPrice}
            name={x.productName}
          />
        </div>
      ))}
    </div>
  );
};

export default Body;
