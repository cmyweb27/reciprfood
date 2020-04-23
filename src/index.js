import React from "react";
import ReactDOM from "react-dom";
import { Context } from "./context";
import App from "./App";
//import App from "./practice2/App";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
