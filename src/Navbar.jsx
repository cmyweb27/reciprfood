import React from "react";
import "./style.css";
import SideBar from "./practice2/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <span className="logo">logo</span>
      <ul className="menu-items">
        <li className="">
          <a href="#">Home</a>
        </li>
        <li className="">
          <a href="#">Recipes</a>
        </li>
        <li className="end">
          <a href="#"> Contact-Us</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
