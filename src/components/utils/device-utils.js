import { css } from 'styled-components';


const size = { 
    mobileSM: 320, 
    mobileMD: 375, 
    mobileLG: 425, 
    tablet: 768, 
    laptop: 1024, 
    laptopLG: 1440,
    desktop: 2560,
}

export const media = Object.keys(size).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${size[label] / 16}em) {
            ${css(...args)};
        }
    `;

    return acc
}, {})

// export const media = {
//     mobileSM: `(min-width: ${size.mobileSM})`, 
//     mobileMD: `(min-width: ${size.mobileMD})`, 
//     mobileLG: `(min-width: ${size.mobileLG})`, 
//     tablet: `(min-width: ${size.tablet})`, 
//     laptop: `(min-width: ${size.laptop})`, 
//     laptopLG: `(min-width: ${size.laptopLG})`, 
//     desktop: `(min-width: ${size.desktop})`
// };