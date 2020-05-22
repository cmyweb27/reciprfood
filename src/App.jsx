import React from "react";
import Main from "./Main";
import Cart from "./Cart";

import { Route, Switch } from "react-router-dom";
import SignUp from "./forms/signup/SignUp";
import Order from "./Order";
import MenuPage from "./menuPage/menuPage";

function App() {
  return (
    <div className="app">
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
        <Route exact path="/menu">
          <MenuPage />
        </Route>
      </Switch>

      <Order />
    </div>
  );
}

export default App;
