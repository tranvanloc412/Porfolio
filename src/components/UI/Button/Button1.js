import React from "react";

import "./Button.css";

const button = (props) => {
  return (
    <div className="Button">
      <button onClick={props.clicked} className="Button top">
        {props.children}
      </button>
      <button onClick={props.clicked} className="Button bot">
        {props.children}
      </button>
    </div>
  );
};

export default button;
