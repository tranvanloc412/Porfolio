import React from 'react';

import './Toolbar.css';
import Brand from '../../Brand/Brand';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className='Toolbar'>
        <Brand  clicked={props.clicked} />
        <DrawerToggle clicked={props.clicked}/>
    </header>
);

export default toolbar;