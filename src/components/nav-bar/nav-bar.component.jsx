import React from 'react';

import './nav-bar.styles.scss';




 

// NavBar 
const NavBar = props => (
    <div className='nav_wrapper'>
        <div className='nav-container'>
            <div className='resume_link'>
                <a id='resume' href='/resume'>Resume</a>
            </div>
            <div className='bucket-list_link'>
                <a id='bucket-list' href='/bucket-list'>Bucket List</a>
            </div>
            <div className='github'>
                <a id='github' href='https://github.com/alxdelgado'>Github</a>
            </div>
        </div>
    </div>
);

export default NavBar; 