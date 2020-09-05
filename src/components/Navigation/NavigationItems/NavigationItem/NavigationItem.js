import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationItem.css'

const navigationItem = (props) => (
    <li className={'Navigation-item'}>
        <Link to={props.link} onClick={props.clicked}> {props.children}</Link>
    </li>
);

export default navigationItem;
