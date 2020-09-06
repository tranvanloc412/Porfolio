import React from "react";

import "./ProjectInfo.css";
import InfoHeader from "./InfoHeader/InfoHeader";
import InfoDescription from "./InfoDescription/InfoDescription";
import ButtonSmall from "../../UI/Button/ButtonSmall";
import ButtonClose from "../../UI/Button/ButtonClose";

const projectInfo = (props) => {
  const openNewWindow = () => {
    window.open(`${props.link}`);
  };
  const openNewWindowCode = () => {
    window.open(`${props.linkCode}`);
  };
  return (
    <div className="Project-info">
      <div className="Info-left">{props.img}</div>
      <div className="Info-right">
        <ButtonClose clicked={props.closeProject} />
        <InfoHeader name={props.name} skills={props.skills} />
        <InfoDescription summary={props.summary} />
        <div className="Button-description">
          <ButtonSmall clicked={openNewWindow}>DEMO</ButtonSmall>
          <ButtonSmall clicked={openNewWindowCode}>CODE</ButtonSmall>
        </div>
      </div>
    </div>
  );
};

export default projectInfo;
