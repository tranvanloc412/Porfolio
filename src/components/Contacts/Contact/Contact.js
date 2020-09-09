import React from "react";

import "./Contact.css";

const contact = (props) => {
  const handleClick = () => {
    window.open(link);
  };
  const links = {
    github: {
      link: "https://github.com/tranvanloc412",
      icon: <i className="fab fa-github-square"></i>,
    },
    linkedin: {
      link: "https://www.linkedin.com/in/van-loc-tran-7497b8b7/",
      icon: <i className="fab fa-linkedin-in"></i>,
    },
    gmail: {
      link: "tranvanloc412@gmail.com",
      icon: <i className="far fa-envelope"></i>,
    },
    resume: {
      link:
        "https://drive.google.com/file/d/1wDm9BRVAvNa3BM86BEdGgTkXQOF5XHd1/view?usp=sharing",
      icon: <i className="far fa-id-badge"></i>,
    },
  };
  let link,
    icon,
    background = null;
  switch (props.contact) {
    case "github":
      link = links.github.link;
      icon = links.github.icon;
      background = "Github";
      break;
    case "likedin":
      link = links.linkedin.link;
      icon = links.linkedin.icon;
      background = "Likedin";
      break;
    case "gmail":
      link = links.gmail.link;
      icon = links.gmail.icon;
      background = "Gmail";
      break;
    case "resume":
      link = links.resume.link;
      icon = links.resume.icon;
      background = "Resume";
      break;
    default:
      break;
  }
  return (
    <div className={`ContactItem ${background}`}>
      <div onClick={handleClick}>
        <span className="ContactLabel">{props.contact}</span> {icon}
      </div>
    </div>
  );
};

export default contact;
