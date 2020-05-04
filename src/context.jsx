import React, { useState, useEffect } from "react";

import axios from "axios";

const context = React.createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState("start");
  const [item, setItem] = useState([]);
  useEffect(() => {
    axios
      .get(" https://a01941cn7f.execute-api.eu-central-1.amazonaws.com/dev")
      .then((res) => {
        setData(res.data);
        setItem(res.data);
      });
  }, []);

  return (
    <div>
      <context.Provider
        value={{
          data,
          cartF: (cee) => {
            setCart(cee);
          },
          cart,
          item,
          addItem: (cee) => {
            setData(cee);
          },
        }}
      >
        {children}
      </context.Provider>
    </div>
  );
};

export { context, Context };
