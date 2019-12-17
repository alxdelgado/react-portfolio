// import React from 'react'; 

// import {
//     FooterWrapper, 
//     FooterContainer, 
//     FooterPro,
//     FooterSocial,
//     TitlePro,
//     TitleSocial, 
//     FooterUL, 
//     FooterLI, 
//     FooterLinks 

// } from './footer.styles'; 



// // Functional Footer Component
// const FooterNav = () => (
//     <FooterWrapper>
//         <FooterContainer>
//                 <FooterPro>
//                     <TitlePro>Professional</TitlePro>
//                     <FooterUL>

//                         <FooterLI>
//                             <FooterLinks href="https://github.com/alxdelgado" target='_blank' rel="noopener noreferrer">GitHub</FooterLinks>
//                         </FooterLI>
//                         <FooterLI>
//                             <FooterLinks href="https://stackoverflow.com/users/11500185/alxdelgado" target='_blank' rel="noopener noreferrer">StackOverflow</FooterLinks>
//                         </FooterLI>
//                         <FooterLI>
//                             <FooterLinks href="https://www.linkedin.com/in/alexdelgadous/" target='_blank' rel="noopener noreferrer">LinkedIn</FooterLinks>
//                         </FooterLI>

//                     </FooterUL>
//                 </FooterPro>

//                 <FooterSocial>
//                     <TitleSocial>Social</TitleSocial>
//                     <FooterUL>

//                         <FooterLI>
//                             <FooterLinks href='/'>Medium</FooterLinks>
//                         </FooterLI>
//                         <FooterLI className='footer_item'>
//                             <FooterLinks href='/' >Twitter</FooterLinks>
//                         </FooterLI>

//                     </FooterUL>
//                 </FooterSocial>
//         </FooterContainer>
//     </FooterWrapper>
// ); 

// export default FooterNav;


// Old code before using styled-components. 
import React from 'react'; 

import './footer.styles.scss'; 



// Functional Footer Component
const FooterNav = () => (
    <footer className='footer'>
        <div className='footer_container'>
                <div className='footer_col' id='column_pro'>
                    <h4 className='footer_title' id='professional_heading'>Professional</h4>
                    <ul className='footer_items' id='items_pro'>

                        <li className='footer_item'>
                            <a href="https://github.com/alxdelgado" className='footer_link-item' target='_blank' rel="noopener noreferrer">GitHub</a>
                        </li>
                        <li className='footer_item'>
                            <a href="https://stackoverflow.com/users/11500185/alxdelgado" className='footer_link-item' target='_blank' rel="noopener noreferrer">StackOverflow</a>
                        </li>
                        <li className='footer_item'>
                            <a href="https://www.linkedin.com/in/alexdelgadous/" className='footer_link-item' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                        </li>

                    </ul>
                </div>

                <div className='footer_col' id='column_socials'>
                    <h4 className='footer_title' id='socials_heading'>Social</h4>
                    <ul className='footer-items' id='items_socials'>

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