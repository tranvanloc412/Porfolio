import React from 'react';

import './InfoDescription.css';

const infoDescription = props => {
    return (
        <div className="Project-description">
            <div className="Project-label">About</div>
            <p className="Project-summary">
                {props.summary}
            </p>
        </div>
    )
};

export default infoDescription;