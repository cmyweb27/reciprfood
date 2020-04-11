import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import Body from "./Body";

function App() {
  return (
    <div className="wrapper">
      <img src="visual.jpg" alt="visuals" />
      <Navbar />
      <Body />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
