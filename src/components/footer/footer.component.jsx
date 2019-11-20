import React from 'react'; 

import {
    FooterWrapper, 
    FooterContainer, 
    FooterColumn,
    FooterTitle, 
    FooterUL, 
    FooterLI, 
    FooterLinks 

} from './footer.styles'; 



// Functional Footer Component
const FooterNav = () => (
    <FooterWrapper>
        <FooterContainer>
                <FooterColumn>
                    <FooterTitle>Professional</FooterTitle>
                    <FooterUL>

                        <FooterLI>
                            <FooterLinks href="https://github.com/alxdelgado" target='_blank' rel="noopener noreferrer">GitHub</FooterLinks>
                        </FooterLI>
                        <FooterLI>
                            <FooterLinks href="https://stackoverflow.com/users/11500185/alxdelgado" target='_blank' rel="noopener noreferrer">StackOverflow</FooterLinks>
                        </FooterLI>
                        <FooterLI>
                            <FooterLinks href="https://www.linkedin.com/in/alexdelgadous/" target='_blank' rel="noopener noreferrer">LinkedIn</FooterLinks>
                        </FooterLI>

                    </FooterUL>
                </FooterColumn>

                <FooterColumn>
                    <FooterTitle>Social</FooterTitle>
                    <FooterUL>

                        <FooterLI >
                            <FooterLinks href='/'>Medium</FooterLinks>
                        </FooterLI>
                        <FooterLI className='footer_item'>
                            <FooterLinks href='/' >Twitter</FooterLinks>
                        </FooterLI>

                    </FooterUL>
                </FooterColumn>
        </FooterContainer>
    </FooterWrapper>
); 

export default FooterNav;


