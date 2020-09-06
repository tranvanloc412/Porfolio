import React from "react";

import "./InfoDescription.css";

const infoDescription = (props) => {
  return (
    <div className="Project-description">
      <div className="Project-label">ABOUT</div>
      <div className="Project-summaries">
        <p className="Project-summary">{props.summary}</p>
      </div>
    </div>
  );
};

export default infoDescription;
