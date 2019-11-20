import styled from 'styled-components';
import { Link } from 'react-router-dom';  

// import { media } from '../utils/media.styles';
import { media } from '../utils/device-utils'; 



export const FooterWrapper = styled.footer`
    width: 100vw;
    overflow: hidden;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    
    ${media.desktop`
        max-width: 2560px; 
    `}

    ${media.laptopLG`
        max-width: '1440px'; 
    `}

`; 

export const FooterContainer = styled.div`
    display: flex;
    height: 30vh; 
    background: #393f4d;

    ${media.desktop`
        max-width: '2560px';
        display: row;
    `}

    ${media.laptopLG`
        display: row;
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
        height: 38vh;
    `}

    ${media.mobileSM`
        display: column;
        height: 35vh;
    `}
`; 

export const FooterColumn = styled.div`
    text-align: left;
    margin-left: 32em;
    margin-inline-end: -15em;

    ${media.desktop`
        margin-left: 50em;
        margin-inline-end: -10em;
    `}

    ${media.laptopLG`
        margin-left: 24em;
        margin-inline-end: -14em;
    `}

    ${media.laptop`
        margin-left: 20em;
        margin-inline-end: -21em;
    `}

    ${media.tablet`
        margin-left: 3em;
        margin-inline-end: -23em;
        margin-top: 20px;
    `} 

    ${media.mobileLG`
        margin-left: 2em;
        margin-inline-end: -27em;
        margin-top: 20px;
    `}

    ${media.mobileMD`
        margin-left: 2em;
    `}

    ${media.mobileSM`
        margin-left: 1.5em;
        margin-top: 5px;
    `}
`;


export const FooterTitle = styled.h4`
    font-size: 1.7rem;
    color: #C0C0C0;

    ${media.desktop`
        font-size: 3rem;
    `} 

    ${media.laptopLG`
        font-size: 1.5rem;
    `}

    ${media.laptop`
        font-size: 1.2rem;
    `}

    ${media.tablet`
        font-size: 1.2rem;
    `}

    ${media.mobileLG`
        font-size: 1rem;
    `}

    ${media.mobileMD`
        font-size: 0.8rem;
    `}

    ${media.mobileSM`
        font-size: 0.8rem;
    `}
`; 

export const FooterUL = styled.ul`
    padding: 0px;

    ${media.desktop`
        font-size: 2rem;
        margin-top: -2rem;
    `}

    ${media.laptopLG`
        font-size: 1rem;
        margin-top: -10px;
    `}

    ${media.laptop`
        font-size: 0.7rem;
        margin-top: -14px;
    `}

    ${media.tablet`
        font-size: 0.7rem;
        margin-top: -20px;
    `}

    ${media.mobileLG`
        font-size: 0.7rem;
        margin-top: -10px;
    `}

    ${media.mobileMD`
        font-size: 0.5rem;
        margin-top: -10px;
    `}

    ${media.mobileSM`
        font-size: 0.5rem;
        margin-top: -10px;
    `}
`;

export const FooterLI = styled.li`
    list-style-type: none;
    padding: 0.3rem; 
`; 

export const FooterLinks = styled(Link)`
    color: #C0C0C0; 
    cursor: pointer;
    padding: 0px;
    text-decoration: none;
`; 