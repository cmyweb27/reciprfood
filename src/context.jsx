import React, { useState, useEffect } from "react";

import axios from "axios";

const context = React.createContext();

const Context = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(" https://a01941cn7f.execute-api.eu-central-1.amazonaws.com/dev")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <context.Provider value={data}>{children}</context.Provider>
    </div>
  );
};

export { context, Context };
