import React from 'react'; 

import './homepage.styles.scss';


// Functional Home Page Component
const HomePage = () => (
    <div className='homepage_wrapper'>
        <div className='homepage_container'>
            <img className='homepage_image' id='alex_sick_photo' src='alex.jpg' alt='profile headshot'></img>
            <h2 className='homepage_title' id='alex_heading'>Alex Delgado</h2>
        </div>
    </div>
); 

export default HomePage; 
 