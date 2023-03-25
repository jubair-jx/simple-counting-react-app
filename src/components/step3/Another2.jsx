import React from "react";

const Another2 = (props) => {
  return (
    <div
      style={{
        border: "2px solid whitesmoke",
        borderRadius: "25px",
        marginTop: "20px",
      }}
    >
      <h4>Here is your another2 Count : {props.counter} </h4>
    </div>
  );
};

export default Another2;
