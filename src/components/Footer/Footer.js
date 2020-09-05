import React from "react";

import "./Footer.css";

const footer = (props) => {
  return (
    <footer className="Footer">
      <div className="Footer-item">
        &copy; 2020 Tran Van Loc. All Rights Reserved.
      </div>
      <div className="Footer-item">
        <div className="Footer-contact">
          Email:{" "}
          <a href="mailto:tranvanloc412@gmail.com" className="Footer-link">
            tranvanloc412@gmail.com
          </a>
        </div>
      </div>
      <div className="Footer-item">
        <div className="Footer-contact">
          Tel:{" "}
          <a href="tel: +84948985348" className="Footer-link">
            +84948985348
          </a>
        </div>
      </div>
    </footer>
  );
};

export default footer;
