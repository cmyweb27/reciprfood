import React from "react";

import ReactDOM from "react-dom";
import MenuPage from "./menuPage/menuPage";
import "semantic-ui-css/semantic.min.css";
import { Context } from "./context";
import App from "./App";
import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { BrowserRouter as Router } from "react-router-dom";
Amplify.configure(awsconfig);
//import App from "./practice2/App";

ReactDOM.render(
  <Router>
    <Context>
      <MenuPage />
    </Context>
  </Router>,
  document.getElementById("root")
);
