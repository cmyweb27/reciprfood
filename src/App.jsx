import React from "react";
import Main from "./Main";
import Cart from "./Cart";
import { Route, Switch } from "react-router-dom";
import SignUp from "./forms/signup/SignUp";
import CartPage from "./cartPage";

function App() {
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
      <CartPage />
    </div>
  );
}

export default App;
