import React from "react";
import Main from "./Main";
import Cart from "./Cart";

import { Route, Switch } from "react-router-dom";
import SignUp from "./forms/signup/SignUp";
import Order from "./Order";

import axios from "axios";

function App() {
  const Post = async () => {
    await axios

      .post(" https://g5hd36pvbk.execute-api.eu-central-1.amazonaws.com/dev", {
        productName: "codeandbox",
      })
      .then((res) => console.log(res, "seems ok"))
      .catch((err) => console.log(err, "error"));
  };
  return (
    <div className="">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/Cart">
          <Cart />
        </Route>
      </Switch>

      <Order />

      <button onClick={Post}>post</button>
    </div>
  );
}

export default App;
