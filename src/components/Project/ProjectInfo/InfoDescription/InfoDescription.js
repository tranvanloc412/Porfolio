import React from "react";

import "./InfoDescription.css";

const infoDescription = (props) => {
  const summaries = props.summary.split(".");
  return (
    <div className="Project-description">
      <div className="Project-label">ABOUT</div>
      <p className="Project-summaries">
        {summaries.map((summary) => (
          <p className="Project-summary">{summary}.</p>
        ))}
      </p>
    </div>
  );
};

export default infoDescription;
