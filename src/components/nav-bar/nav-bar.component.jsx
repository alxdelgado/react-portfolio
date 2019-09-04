import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.styles.scss'; 
 

// NavBar 
const NavBar = () => (
    <div className='nav_wrapper'>
        <div className='nav-container'>
            <div className='resume_link' id='resume'>
                <a href='/resume'>Resume</a>
            </div>
            <div className='bucket-list_link' id='bucket-list'>
                <a href='/bucket-list'>Bucket List</a>
            </div>
            <div className='github' id='github'>
                <a href='https://github.com/alxdelgado'>Github</a>
            </div>
        </div>
    </div>
);

export default NavBar; 