import React, { Component } from "react";

import Project from "../../components/Project/Project";
import "./Projects.css";

class projects extends Component {
  state = {
    projects: [
      {
        name: "Messenger-clone",
        summary: `For this project I worked with things like Authentication with OAuth2, PayPal API, Database Design, UI & UX, and I used Vue and Vuex to make the project a Single Page Application. 
                            ${(<br />)} ${(
          <br />
        )} Victor from Adventure Cord approached me to develop a website for his Discord bot where users can log in with their Discord accounts and view their profile stats, view other users's stats, read news and updates for the bot directly from the team and purchase products to use within the bot. Since I had a lot of time to build the project and wanted to learn as much as possible, 
                            I decided to build everything from scratch.`,
        skills: ["html", "css", "react", "firebase"],
        img: <img src="/img/messenger-clone.png" alt="messenger-clone"></img>,
        link: "https://facebook-messenger-clone-34544.web.app/",
      },
      {
        name: "Netflix-clone",
        summary: `On this project I was responsible for the initial UI/UX Design, the frontend implementation and most of the backend implementation. The goal was to create a competitive platform from scratch for the computer game Warcraft 3, where teams and individual players can create their profiles, sign up for diferent tournaments and leagues, and compete.
                            ${(<br />)} ${(
          <br />
        )} I bounced many hats during this project and worked a lot on things like MySQL Database Design, CRUD with Laravel and PHP, UI and UX Design, SASS, JavaScript and more.`,
        skills: ["html", "css", "react"],
        img: <img src="/img/netflix-clone.png" alt="netflix-clone"></img>,
      },

      {
        name: "Burger-app",
        summary: `The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff.
                            ${(<br />)} ${(
          <br />
        )}This is a Single Page Application and is built using Vue.js and SASS with the BEM methodology.`,
        skills: ["html", "css", "react", "firebase"],
        img: <img src="/img/burger-app.png" alt="burger-app"></img>,
        link: "https://react-my-burger-6f77b.web.app/",
      },

      {
        name: "Portfolio",
        summary: `The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff.
                            ${(<br />)} ${(
          <br />
        )}This is a Single Page Application and is built using Vue.js and SASS with the BEM methodology.`,
        skills: ["html", "css", "react", "firebase"],
        img: <img src="/img/loctran.png" alt="burger-app"></img>,
        link: "",
      },

      {
        name: "Relaxer",
        summary: `The idea behind this project was to create a showcase of all my big projects for the past year. I tried to keep the UI as simple as possible without any fluff.
                            ${(<br />)} ${(
          <br />
        )}This is a Single Page Application and is built using Vue.js and SASS with the BEM methodology.`,
        skills: ["html", "css", "react", "firebase"],
        img: <img src="/img/Relaxer.png" alt="Relaxer"></img>,
        link: "",
      },
    ],
  };

  render() {
    const projectList = this.state.projects.map((project) => (
      <Project
        link={project.link}
        key={project.name}
        name={project.name}
        summary={project.summary}
        img={project.img}
        skills={project.skills}
      />
    ));
    return (
      <div className="Projects-Control">
        <h1>PORTFOLIO</h1>
        <p>
          These are my favorite projects I've worked on for the past months.
          Have a look around and make sure to hit me up!
        </p>
        <div className="Projects">{projectList}</div>
      </div>
    );
  }
}

export default projects;
