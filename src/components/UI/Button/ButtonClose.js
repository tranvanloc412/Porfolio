import React from 'react';

import './ButtonClose.css';

const buttonClose = (props) => {
    return <button 
        onClick={props.clicked}
        className="Button-close">
        <i className="fas fa-times"></i>
    </button>
}

export default buttonClose;