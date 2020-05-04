import React, { useContext } from "react";
import Main from "./Main";
import Cart from "./Cart";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./forms/signup/SignUp";

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
      <div className="but">
        {" "}
        <div className="ui icon  buttons">
          <button className="ui button">
            <i className="minus icon"></i>
          </button>
          <button className="ui button">
            <div>2</div>
          </button>
          <button className="ui button">
            <i className="add icon red"></i>
          </button>
        </div>{" "}
        <div className="ui buttons">
          <button className="ui button ">
            <div>
              {" "}
              <span>&#8358;</span>1200
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
