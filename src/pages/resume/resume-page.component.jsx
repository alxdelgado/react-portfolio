import React from 'react'; 

import './resume-page.styles.scss'; 

// Functional Component - Resume Page
const ResumePage = () => (
    <div className='resume_wrapper'>
        <div className='resume_container'>
            <h1 className='resume_heading' id='resume_heading'>Resume</h1> 
            <h2 className='resume_socials'>Internet Profiles</h2>
            <p>
                <a href='https://github.com/alxdelgado' target='_blank' rel="noopener noreferrer">Github</a>
                <br/>
                <a href='https://stackoverflow.com/users/11500185/alxdelgado' target='_blank' rel="noopener noreferrer">StackOverflow</a>
                <br/>
                <a href='https://www.linkedin.com/in/alexdelgadous/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
            </p>
            <h1>Professional Experience</h1>
            <h3>Software Engineering Immersive, General Assembly</h3>
            <em>Jun 2018 - Sep 2018 | Chicago, IL</em> 
            <p>At GA, we dove into software development environment, learned the basics of computing, networks, and data structures. We then began learning to build applications from the ground up using Javascript and front end frameworks like React. Incorporated functionality from Third Party APIs and added complexity and nuance with Node.js, and PostgreSql.</p>
            <h3>Business Development Associate, Replicon</h3>
            <em>Apr 2017 - Jun 2018 | Chicago, IL</em>
            <p>Replicon is a software company providing cloud time tracking applications. My role in the Biz Dev team was to secure mid-sized engagement, exceed monthly meeting quota, and track all client communication, prospects, leads and proposals to close in Salesforce.</p>
            <h1>Education</h1>
            <h3>Columbia College Chicago</h3>
            <em>Sep 2012 - May 2015 | Bachelor of Arts</em>
            <h3>General Assembly</h3>
            <em>Jun 2018 - Sep 2018 | Software Engineering Immersive</em>

        </div>
    </div>  
); 

export default ResumePage;
