import React from "react";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
export default (props) => {
  return (
    <Menu width={"100%"}>
      <Link to="/">Home</Link>

      <Link to="/basket">Cart</Link>

      <Link to="/menu">Menu</Link>

      <Link to="/desserts">Drinks</Link>
    </Menu>
  );
};
