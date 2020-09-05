import React from 'react';

import './Contact.css';

const contact = props => {
    const links = {
        github: {
            link: "https://www.github.com/",
            icon: (<i className="fab fa-github-square"></i>),
            
        },
        linkedin: {
            link: "https://www.linkedin.com/",
            icon: (<i className="fab fa-linkedin-in"></i>),
            
        },
        gmail: {
            link: "https://www.google.com/",
            icon: (<i className="far fa-envelope"></i>),
            
        },
        resume: {
            link: "https://www.google.com/",
            icon: (<i className="far fa-id-badge"></i>),
            
        },
    }
    let link, icon, background = null;
    switch (props.contact) {
        case "github":
            link = links.github.link;
            icon = links.github.icon;
            background = "Github"
            break;
        case "likedin":
            link = links.linkedin.link;
            icon = links.linkedin.icon;
            background = "Likedin"
            break;
        case "gmail":
            link = links.gmail.link;
            icon = links.gmail.icon;
            background = "Gmail"
            break;
        case "resume":
            link = links.resume.link;
            icon = links.resume.icon
            background = "Resume"
            break;
        default:
            break;
    }
    return (
        <li className={`ContactItem ${background}`}>
                <a href={link} >
                    <span className="ContactLabel">{props.contact}</span> {icon}
                </a>
        </li>
    )
};

export default contact;