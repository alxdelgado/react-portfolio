import React from 'react'; 

import './footer.styles.scss'; 



// Functional Footer Component
const FooterNav = () => (
    <footer className='footer'>
        <div className='footer_container'>
                <div className='footer_col'>
                    <h4 className='footer_title' id='professional'>Professional</h4>
                    <ul className='footer_items'>

                        <li className='footer_item'>
                            <a href="https://github.com/alxdelgado" className='footer_link-item'>Github</a>
                        </li>
                        <li className='footer_item'>
                            <a href="https://stackoverflow.com/users/11500185/alxdelgado" className='footer_link-item'>StackOverflow</a>
                        </li>
                        <li className='footer_item'>
                            <a href="https://www.linkedin.com/in/alexdelgadous/" className='footer_link-item'>LinkedIn</a>
                        </li>

                    </ul>
                </div>

                <div className='footer_col' id='socials'>
                    <h4 className='footer_title'>Socials</h4>
                    <ul className='footer-items' id='socials'>

                        <li className='footer_item'>
                            <a href='/' className='footer_link-item'>Medium</a>
                        </li>
                        <li className='footer_item'>
                            <a href='/' className='footer_link-item'>Twitter</a>
                        </li>

                    </ul>
                </div>
        </div>
    </footer>
); 

export default FooterNav;


