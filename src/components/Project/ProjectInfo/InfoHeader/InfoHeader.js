import React from 'react';

import './InfoHeader.css';

const infoHeader = props => {
    const skills = props.skills.map(skill => (
        <span  className='Skills-info' key={skill}> {skill} </span>
    ));
    return (
        <header className="Project-header">
            <div className="Project-label">Project</div>
            <div className="Project-name" >{props.name}</div>
            {skills}
        </header>
    );
};

export default infoHeader;
