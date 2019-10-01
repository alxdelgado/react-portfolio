import React from 'react'; 

import './sidebar.styles.scss'; 

const SideBar = props => (
    <nav className='sideBar' onClick={props.click}>
        <ul>
            <li><a href='/resume'>Resume</a></li>
            <li><a href='/projects'>Projects</a></li>
            <li><a href='https://github.com/alxdelgado' target='_blank' rel="noopener noreferrer">Github</a></li>
        </ul> 
    </nav>
); 

export default SideBar; 
