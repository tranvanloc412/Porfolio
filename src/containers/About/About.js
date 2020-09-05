import React from "react";

import Button from "../../components/UI/Button/Button";
import PrimaryHeader from "../../components/Intro/PrimaryHeader";
import PrimarySub from "../../components/Intro/PrimarySub";
import "./About.css";

const about = (props) => {
  return (
    <div className="About">
      <PrimaryHeader> Hi, It's Loc</PrimaryHeader>
      <PrimarySub text="I'm a web designer &amp; developer currently based in Ho Chi Minh, Vietnam"></PrimarySub>
      <PrimarySub text="Hit me up and let's create something special"></PrimarySub>
      <div className="Button-about">
        <Button link="/projects">View Projects</Button>
      </div>
    </div>
  );
};

export default about;
