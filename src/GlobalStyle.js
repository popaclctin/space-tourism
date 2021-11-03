import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`    
    :root {
        /* Colors */
        --clr-dark: 11 13 23;
        --clr-light: 208 214 249;
        --clr-white: 255 255 255;

        /* Font sizes */
        --fs-900: 9.375rem;
        --fs-800: 6.25rem;
        --fs-700: 3.5rem;
        --fs-600: 2rem;
        --fs-500: 1.75rem;
        --fs-400: 1.125rem;
        --fs-300: 1rem;
        --fs-200: 0.875rem;

        /* Font families */
        --ff-sans-normal: 'Barlow', sans-serif;
        --ff-sans-cond: 'Barlow Condensed', sans-serif;
        --ff-serif: 'Bellefair', serif;
    }
    
    /* Reset */

    /* Box sizing */
    *,*::before,*::after {
        box-sizing: border-box;
    }

    /* Reset margins */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    figure,
    picture {
        margin: 0;
    }

    /* Set up the body */
    body {
        font-family: var(--ff-sans-normal);
        font-size: var(--fs-400);
        color: rgb(var(--clr-white));
        background-color: rgb(var(--clr-dark));
        line-height: 1.5;
        min-height: 100vh;
    }

    /* Make images easier to use */
    img, picture {
        max-width: 100%;
        display: block;
    }

    /* Make forms easier to use */
    input, button, textarea, select {
        font: inherit;
    }

    /* Remove animations for people who've turned them off */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

`;
