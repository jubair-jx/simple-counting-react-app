import React from "react";
import Another2 from "../step3/Another2";

const Another = (props) => {
  return (
    <div>
      <div
        style={{
          border: "2px solid blue",
          borderRadius: "20px",
          marginTop: "20px",
        }}
      >
        <h3>Here is your another Count : {props.count} </h3>
      </div>
      <Another2 counter={props.count}></Another2>
    </div>
  );
};

export default Another;
