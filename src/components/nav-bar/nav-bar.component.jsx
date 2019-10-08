import React from 'react';

import './nav-bar.styles.scss';
import ToggleButton from '../toggleButton/toggleButton.component';




 

// NavBar 
const NavBar = props => (
    <div className='nav_wrapper'>
        <ToggleButton click={props.sideBarClickHandler} />
        
        <div className='nav-container'>
            <li className='headline_link'>
                <a id='headline' href='/'><strong>Delgado</strong></a>
            </li>
            <li className='resume_link'>
                <a id='resume' href='/resume'>Resume</a>
            </li>
            <li className='bucket-list_link'>
                <a id='bucket-list' href='/projects'>Projects</a>
            </li>
            <li className='github'>
                <a id='github' href='https://github.com/alxdelgado' target='_blank' rel="noopener noreferrer">Github</a>
            </li>
        </div>
    </div>
);

export default NavBar; 
