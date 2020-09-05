import React from "react";

import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <div className={`Navigation-items ${props.show && "show"}`}>
      <ul>
        <NavigationItem link="/" exact clicked={props.clicked}>
          About
        </NavigationItem>
        <NavigationItem link="/projects" clicked={props.clicked}>
          View Projects
        </NavigationItem>
      </ul>
    </div>
  );
};

export default navigationItems;
