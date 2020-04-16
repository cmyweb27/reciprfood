import React from "react";
import "./style.css";
import SideBar from "./practice2/SideBar";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="sidebar">
        <div className="test">
          <SideBar />
        </div>

        <ul className="menu-items">
          <li className="">
            <a href>Home</a>
          </li>
          <li className="">
            <a href>Recipes</a>
          </li>
          <li className="end">
            <a href> Contact-Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
