import React from "react";

import "./ButtonSmall.css";

const buttonSmall = (props) => {
  return (
    <div className="Button-small">
      <button onClick={props.clicked} className="Button-small top">
        {props.children}
      </button>
      <button onClick={props.clicked} className="Button-small bot">
        {props.children}
      </button>
    </div>
  );
};

export default buttonSmall;
