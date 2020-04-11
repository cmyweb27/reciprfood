import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import Body from "./Body";
import Card from "./Card";

function App() {
  return (
    <div className="wrapper">
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>

      <div className="">
        <Card />
      </div>
      <div className="">
        <Card />
      </div>
    </div>
  );
}

export default App;
