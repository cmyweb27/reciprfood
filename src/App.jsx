import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Aside from "./Aside";
import Footer from "./Footer";
import Body from "./Body";
import test from "./see.module.css";
function App() {
  return (
    <div className="app">
      <div className="app-nav">
        <Navbar />
      </div>

      <div className="app-body">
        <Body />
      </div>
      <h1 className={test.example}> just a text</h1>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
