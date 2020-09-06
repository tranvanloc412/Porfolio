import React, { Component } from "react";

import "./Project.css";
import Button from "../UI/Button/Button";
import ProjectInfo from "./ProjectInfo/ProjectInfo";

class Project extends Component {
  state = {
    showProjectInfo: false,
  };

  showProjectHandler = () => {
    this.setState({ showProjectInfo: true });
  };

  closeProjectHandler = () => {
    this.setState({ showProjectInfo: false });
  };
  render() {
    const projectInfo = (
      <ProjectInfo
        linkCode={this.props.linkCode}
        link={this.props.link}
        name={this.props.name}
        summary={this.props.summary}
        img={this.props.img}
        skills={this.props.skills}
        closeProject={this.closeProjectHandler}
      />
    );
    return (
      <div className="Project">
        {this.state.showProjectInfo && projectInfo}
        {this.props.img}
        <div className="Background">
          <div className="Button-project">
            <Button link="/projects" clicked={this.showProjectHandler}>
              View Projects
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
