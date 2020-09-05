import React from 'react';

import './ButtonSmall.css';

const buttonSmall = (props) => {
    return <button 
        onClick={props.clicked}
        className="Button-small">
        {props.children}
    </button>
}

export default buttonSmall;