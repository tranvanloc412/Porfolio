import React from "react";

import "./DrawerToggle.css";
import ProjectContext from "../../../context/project-context";

const drawerToggle = (props) => {
  let drawerClass = null;
  return (
    <ProjectContext.Consumer>
      {(context) => {
        context.navVisible
          ? (drawerClass = "Drawer Close")
          : (drawerClass = "Drawer Open");
        return (
          <div onClick={props.clicked} className="Drawer-toggle">
            <div className={drawerClass}></div>
            <div className={drawerClass}></div>
            <div className={drawerClass}></div>
          </div>
        );
      }}
    </ProjectContext.Consumer>
  );
};

export default drawerToggle;
