import { css } from 'styled-components';

const sizes = { 
    mobileSM: 320, 
    mobileMD: 375, 
    mobileLG: 425, 
    tablet: 768, 
    laptop: 1024, 
    laptopLG: 1440,
    desktop: 2560,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)};
        }
    `;

    return acc
}, {})

