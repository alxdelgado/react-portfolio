import React from 'react'; 
import './projects.styles.scss'; 

const ProjectsPage = props => (
    <div className='projects_wrapper'>
        <div className='projects_container'>
            <h1 className='projects_heading'>Crown Clothing</h1>
            <p>Crown-Clothing is an Ecommerce platform using React, Redux and Firebase. With this application you can log in, choose items and checkout using the Stripe API.</p>
            <a href='https://crwnclothing-live-shop-popup.herokuapp.com/' target='_blank' rel="noopener noreferrer"><img className='crown-clothing-app' src='/Crown-Clothing.png' alt='projectimage'/></a>
        </div>
    </div>
); 

export default ProjectsPage; 
