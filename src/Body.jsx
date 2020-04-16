import React from "react";
import Card from "./Card";
const Body = () => {
  return (
    <div className="wrapper">
      <div className="one">
        <Card image="images/pizza-2.jpg" />
      </div>
      <div className="">
        <Card image="images/pizza-1.jpg" />
      </div>
      <div className="">
        <Card image="images/pizza-3.jpg" />
      </div>
      <div className="">
        <Card image="images/pizza-2.jpg" />
      </div>

      <div className="">
        <Card image="images/pizza-3.jpg" />
      </div>
      <div className="">
        <Card image="images/pizza-1.jpg" />
      </div>
    </div>
  );
};

export default Body;
