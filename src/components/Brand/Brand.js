import React from 'react';
import { Link } from 'react-router-dom';

import './Brand.css';

const brand = props => {
    return (
        <picture className='Brand'>
            <source media="(max-width:650px)" srcSet="/img/loctran_3x.png"></source>
            <Link to='/' ><img src="/img/loctran_3x.png" alt="Loc Tran Brand" onClick={props.clicked}/></Link>
        </picture>    
    )
};
export default brand;
 