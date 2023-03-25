import React, { useState } from "react";
import Another from "../Steps2/Another";

const Count = () => {
  const [count, setCount] = useState(0);
  const Counter = () => {
    setCount(count + 1);
  };
  return (
    <div
      style={{
        border: "2px solid purple",
        borderRadius: "20px",
        padding: "20px 30px",
      }}
    >
      <h1>Here is Your Steps : {count} </h1>
      <button onClick={Counter}>Check Count</button>

      <Another count={count}></Another>
    </div>
  );
};

export default Count;
