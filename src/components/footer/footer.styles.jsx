import styled from 'styled-components';
import { Link } from 'react-router-dom';  

import { device } from '../device/device.styles';



export const FooterWrapper = styled.footer`
    width: 100vw;
    overflow: hidden;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
    
    @media ${device.desktop} {
        max-width: '2560px'; 
    }

    @media ${device.laptopLG} {
        max-width: '1440px'; 
    }

`; 

export const FooterContainer = styled.div`
    display: flex;
    height: 30vh; 
    background: #393f4d;

    @media ${device.desktop} {
        max-width: '2560px';
        display: row;
    }

    @media ${device.laptopLG} {
        display: row;
    }

    @media ${device.laptop} {
        display: row; 
    }

    @media ${device.tablet} {
        display: flex;
        flex-direction: column;
        height: 45vh;
    }

    @media ${device.mobileLG} {
        display: flex;
        flex-direction: column;
        height: 40vh;
    }

    @media ${device.mobileMD} {
        flex-direction: column;
        height: 38vh;
    }

    @media ${device.mobileSM} {
        display: column;
        height: 35vh;
    }
`; 

export const FooterColumn = styled.div`
    text-align: left;
    margin-left: 32em;
    margin-inline-end: -15em;

    @media ${device.desktop} {
        margin-left: 50em;
        margin-inline-end: -10em;
    }

    @media ${device.laptopLG} {
        margin-left: 24em;
        margin-inline-end: -14em;
    }

    @media ${device.laptop} {
        margin-left: 20em;
        margin-inline-end: -21em;
    }

    @media ${device.tablet} {
        margin-left: 3em;
        margin-inline-end: -23em;
        margin-top: 20px;
    }

    @media ${device.mobileLG} {
        margin-left: 2em;
        margin-inline-end: -27em;
        margin-top: 20px;
    }

    @media ${device.mobileMD} {
        margin-left: 2em;
    }

    @media ${device.mobileSM} {
        margin-left: 1.5em;
        margin-top: 5px;
    }
`;


export const FooterTitle = styled.h4`
    font-size: 1.7rem;
    color: #C0C0C0;

    @media ${device.desktop} {
        font-size: 3rem;
    }

    @media ${device.laptopLG} {
        font-size: 1.5rem;
    }

    @media ${device.laptop} {
        font-size: 1.2rem;
    }

    @media ${device.tablet} {
        font-size: 1.2rem;
    }

    @media ${device.mobileLG} {
        font-size: 1rem;
    }

    @media ${device.mobileMD} {
        font-size: 0.8rem;
    }

    @media ${device.mobileSM} {
        font-size: 0.8rem;
    }
`; 

export const FooterUL = styled.ul`
    padding: 0px;

    @media ${device.desktop} {
        font-size: 2rem;
        margin-top: -2rem;
    }

    @media ${device.laptopLG} {
        font-size: 1rem;
        margin-top: -10px;
    }

    @media ${device.laptop} {
        font-size: 0.7rem;
        margin-top: -14px;
    }

    @media ${device.tablet} {
        font-size: 0.7rem;
        margin-top: -20px;
    }

    @media ${device.mobileLG} {
        font-size: 0.7rem;
        margin-top: -10px;
    }

    @media ${device.mobileMD} {
        font-size: 0.5rem;
        margin-top: -10px;
    }

    @media ${device.mobileSM} {
        font-size: 0.5rem;
        margin-top: -10px;
    }
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