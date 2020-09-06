import React, { Component } from "react";

import Project from "../../components/Project/Project";
import "./Projects.css";

class projects extends Component {
  state = {
    projects: [
      {
        name: "Messenger-clone",
        summary: `I wanted to make a real time web-app so I used Cloud Firebase to store messages from different users. This allows you to send and get messages from friends in real time.
        
        I used Material UI for making form and button of this project.`,
        skills: ["html & css", "reactjs", "firebase", "material UI"],
        img: <img src="/img/messenger-clone.png" alt="messenger-clone"></img>,
        link: "https://facebook-messenger-clone-34544.web.app/",
        linkCode: "https://github.com/tranvanloc412/messenger-clone",
      },
      {
        name: "Netflix-clone",
        summary: `In this project, I used TMDb API to make a Netflix clone. This website introduces movies on Netflix and other categories.
        
        Also I used React-youtube and movie-trailer to display trailer of chosen film.`,
        skills: ["html & css", "reactjs", "firebase"],
        img: <img src="/img/netflix-clone.png" alt="netflix-clone"></img>,
        link: "https://netflix-clone-9b5ef.web.app/",
        linkCode: "https://github.com/tranvanloc412/Netflix-clone",
      },

      {
        name: "Burger-app",
        summary: `For this project I worked with things like Authentication with JSON Web Token and Firebase, I used ReactJs to make the project a Single Page Application.
        This app is an burger order app with four options of ingredients. Contact of customers will be uploaded on firebase real time database once they confirm their order and they can also follow their orders `,
        skills: ["html & css", "reactjs", "redux", "firebase"],
        img: <img src="/img/burger-app.png" alt="burger-app"></img>,
        link: "https://react-my-burger-6f77b.web.app/",
        linkCode: "https://github.com/tranvanloc412/burger-app",
      },

      {
        name: "Portfolio",
        summary: `The idea behind this project was to create a showcase of some of my projects for the past few months. I tried to keep the UI as simple as possible without any fluff. 
        This is a Single Page Application and is built using ReactJs and CSS.`,
        skills: ["html & css", "JavaScript", "reactjs", "responsive"],
        img: <img src="/img/loctran.png" alt="burger-app"></img>,
        link: "https://portfolio-939e1.web.app/",
        linkCode: "https://github.com/tranvanloc412/Porfolio",
      },

      {
        name: "Relaxer",
        summary: `This is one of my first projects. I wanted to create a website which stores all of my favorite songs and talks.
        I only use CSS to create animations, a custom audio play holder and also config webpack by myself.
        In addition to this, when I update songs on Firebase Storage, all of them will be added to this web.`,
        skills: ["html & css", "responsive", "javascript", "firebase"],
        img: <img src="/img/relaxer.jpg" alt="Relaxer"></img>,
        link: "https://relaxer1-73633.web.app/",
        linkCode: "https://github.com/tranvanloc412/Relaxer",
      },
    ],
  };

  render() {
    const projectList = this.state.projects.map((project) => (
      <Project
        linkCode={project.linkCode}
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
