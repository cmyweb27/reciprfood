import React from "react";

import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { Context } from "./context";
import App from "./App";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
//import App from "./practice2/App";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
