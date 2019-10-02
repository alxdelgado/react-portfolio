import React from 'react'; 

import './sidebar.styles.scss'; 

const SideBar = props => (
    <nav className='sideBar'>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/resume'>Resume</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='https://github.com/alxdelgado' target='_blank' rel="noopener noreferrer">Github</a></li>
        </ul> 
    </nav>
); 

export default SideBar; 
