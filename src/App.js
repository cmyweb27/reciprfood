import React, { useState } from "react";

function App() {
  const [name] = useState("Carlo");
  return (
    <div className="">
      <h1>well done {name}</h1>
    </div>
  );
}

export default App;
