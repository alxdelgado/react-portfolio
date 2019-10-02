import React from 'react';

import './nav-bar.styles.scss';
import ToggleButton from '../toggleButton/toggleButton.component';




 

// NavBar 
const NavBar = props => (
    <div className='nav_wrapper'>
        <ToggleButton click={props.sideBarClickHandler} />
        
        <div className='nav-container'>
            <div className='headline_link'>
                <a id='headline' href='/'><strong>Delgado</strong></a>
            </div>
            <div className='resume_link'>
                <a id='resume' href='/resume'>Resume</a>
            </div>
            <div className='bucket-list_link'>
                <a id='bucket-list' href='/projects'>Projects</a>
            </div>
            <div className='github'>
                <a id='github' href='https://github.com/alxdelgado' target='_blank' rel="noopener noreferrer">Github</a>
            </div>
        </div>
    </div>
);

export default NavBar; 
