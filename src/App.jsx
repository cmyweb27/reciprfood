import React from "react";
import Main from "./Main";
import Cart from "./Cart";

import { Route, Switch } from "react-router-dom";
import SignUp from "./forms/signup/SignUp";
import Order from "./Order";
import MenuPage from "./menuPage/menuPage";
import Basket from "./basket/Basket";
import SideBar from "./practice2/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
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
        <Route exact path="/basket">
          <Basket />
        </Route>
      </Switch>

      <Order />
    </div>
  );
}

export default App;
