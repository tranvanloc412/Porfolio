import React from "react";

const style = {
  fontSize: "5rem",
  letterSpacing: "4px",
  color: "var(--white-color)",
  marginBottom: "20px",
};

const primaryHeader = (props) => {
  return <h1 style={style}>{props.children}</h1>;
};

export default primaryHeader;
