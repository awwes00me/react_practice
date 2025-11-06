import React from "react";
import { useState } from "react";
import ClickCounter from "./ClickCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ClickCounter />
    </div>
  );
}

export default App;
