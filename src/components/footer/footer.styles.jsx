import styled from 'styled-components';
import { Link } from 'react-router-dom';  

// import { media } from '../utils/media.styles';
import { media } from '../utils/device-utils'; 



export const FooterWrapper = styled.footer`
    width: 100vw;
    overflow: hidden;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    background: #393f4d;
    
    ${media.desktop`
        width: 100vw;
        height: 10vh;
    `}

    ${media.laptopLG`
        width: 100vw;
        height: 30vh;
    `}

    ${media.laptop`
        width; 100vw;
        height: 30vh;   
    `}

    ${media.tablet`
        width: 100vw;
        height: 35vh;
    `}

    ${media.mobileLG`
        width: 100vw; 
        height: 35vh;
    `}

    ${media.mobileMD`
        width: 100vw; 
        height: 35vh;
    `}

    ${media.mobileSM`
        width: 100vw; 
        height: 35vh;
    `}

`; 

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;

    ${media.desktop`
        display: flex;
        flex-direction: column;
    `}

    ${media.laptopLG`
        display: flex;
        flex-direction: column;
    `} 

    ${media.laptop`
        display: row; 
    `}

    ${media.tablet`
        display: flex;
        flex-direction: column;
        height: 45vh;
    `}

    ${media.mobileLG`
        display: flex;
        flex-direction: column;
        height: 40vh;
    `}

    ${media.mobileMD`
        flex-direction: column;

    `}

    ${media.mobileSM`
        display: column;

    `}
`; 

export const FooterPro = styled.div`
    text-align: left;
    display: flex; 
    flex-direction: column; 

    ${media.desktop`
        

    `}

    ${media.laptopLG`
        margin-left: 2em;
        padding-left: 29em;
    `}
`;

export const FooterSocial = styled.div`
    text-align: left;
    display: flex; 
    flex-direction: column;
    
    ${media.desktop`
        
    `}

    ${media.laptopLG`
        margin-left: 2em;
        margin-top: -14em;
        padding-left: 57em;
        padding-bottom: 0em;
        
    `}
`;


export const TitlePro = styled.h4`
    font-size: 1.7rem;
    color: #C0C0C0;

    ${media.desktop`
        font-size: 3em;
    `} 
`; 

export const TitleSocial = styled.h4`
    font-size: 1.7rem;
    color: #C0C0C0;

    ${media.desktop`
        font-size: 3em;
    `}
`;

export const FooterUL = styled.ul`
    padding: 0px;

    ${media.desktop`
        margin-top: -2em;
    `}

    ${media.laptopLG`
        margin-top: -10px;
    `}

    ${media.laptop`
        margin-top: -14px;
    `}

    ${media.tablet`
        margin-top: -20px;
    `}

    ${media.mobileLG`
        margin-top: -10px;
    `}

    ${media.mobileMD`
        margin-top: -10px;
    `}

    ${media.mobileSM`
        margin-top: -10px;
    `}
`;

export const FooterLI = styled.li`
    list-style-type: none;
    padding: 0.2em; 
`; 

export const FooterLinks = styled(Link)`
    color: #C0C0C0; 
    cursor: pointer;
    padding: 0px;
    text-decoration: none;
    font-size: 1.7rem;
`; 