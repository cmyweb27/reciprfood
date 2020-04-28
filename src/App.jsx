import React from "react";
import "./App.css";
import Navbar from "./Navbar";

import Footer from "./Footer";
import Body from "./Body";
import Auth from "./Authentication";
function App() {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Body />
      </div>

      <div>
        <Footer />
      </div>
      <div className="auth">
        <Auth />
      </div>
    </div>
  );
}

export default App;
