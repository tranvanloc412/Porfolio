import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const button = (props) => {
  return (
    <Link to={props.link} className="Button">
      <button onClick={props.clicked} className="Button top">
        {props.children}
      </button>
      <button onClick={props.clicked} className="Button bot">
        {props.children}
      </button>
    </Link>
  );
};

export default button;
