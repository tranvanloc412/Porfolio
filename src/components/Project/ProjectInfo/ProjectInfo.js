import React from "react";

import "./ProjectInfo.css";
import InfoHeader from "./InfoHeader/InfoHeader";
import InfoDescription from "./InfoDescription/InfoDescription";
import Button1 from "../../UI/Button/Button";
import ButtonClose from "../../UI/Button/ButtonClose";

const projectInfo = (props) => {
  const openNewWindow = () => {
    window.open(`${props.link}`);
  };
  return (
    <div className="Project-info">
      <div className="Info-left">{props.img}</div>
      <div className="Info-right">
        <ButtonClose clicked={props.closeProject} />
        <InfoHeader name={props.name} skills={props.skills} />
        <InfoDescription summary={props.summary} />
        <div className="Button-description">
          <Button1 clicked={openNewWindow}>DEMO</Button1>
          <Button1 link="/">CODE</Button1>
        </div>
      </div>
    </div>
  );
};

export default projectInfo;
