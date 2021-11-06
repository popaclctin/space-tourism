import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`    
    
    /* ------------------- */
    /* Custom properties   */
    /* ------------------- */

    //Mobile
    :root {
        /* Colors */
        --clr-dark: 11 13 23;
        --clr-light: 208 214 249;
        --clr-white: 255 255 255;

        /* Font sizes */
        --fs-900: 5rem;
        --fs-800: 3.5rem;
        --fs-700: 1.5rem;
        --fs-600: 1rem;
        --fs-500: 1rem;
        --fs-400: 0.9375rem;
        --fs-300: 1rem;
        --fs-200: 0.875rem;

        /* Font families */
        --ff-sans-normal: 'Barlow', sans-serif;
        --ff-sans-cond: 'Barlow Condensed', sans-serif;
        --ff-serif: 'Bellefair', serif;
    }

    //Tablet
    @media(min-width:35em) {
        /* Font sizes */
        --fs-900: 9.375rem;
        --fs-800: 5rem;
        --fs-700: 2.5rem;
        --fs-600: 1.5rem;
        --fs-500: 1.25rem;
        --fs-400: 1rem;
    }

    //Desktop
    @media(min-width:45em) {
        /* Font sizes */
        --fs-800: 6.25rem;
        --fs-700: 3.5rem;
        --fs-600: 2rem;
        --fs-500: 1.75rem;
        --fs-400: 1.125rem;
    }
    
    /* ------------------- */
    /* Reset   */
    /* ------------------- */

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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
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

    /* Make form elements easier to use */
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

    /* ------------------- */
    /* Utility classes     */
    /* ------------------- */

    .flex {
        display:flex;
        gap: var(--gap, 1rem);
    }

    .grid {
        display: grid;
        gap: var(--gap, 1rem);
    }

    .flow > * + * {
        margin-top: var(--flow-space, 1rem);
    }

    .d-block {
        display: block;
    }

    .container {
        padding: 0 2em;
        margin: 0 auto;
        max-width: 80rem;
    }

    /* Colors */

    .bg-dark { background-color: rgb( var(--clr-dark) );}
    .bg-accent { background-color: rgb( var(--clr-light) );}
    .bg-white { background-color: rgb( var(--clr-white) );}

    .text-dark { color: rgb( var(--clr-dark) );}
    .text-accent { color: rgb( var(--clr-light) );}
    .text-white { color: rgb( var(--clr-white) );}

    /* Typography */

    .ff-serif { font-family: var(--ff-serif); } 
    .ff-sans-cond { font-family: var(--ff-sans-cond); } 
    .ff-sans-normal { font-family: var(--ff-sans-normal); } 

    .letter-spacing-1 { letter-spacing: 4.75px; } 
    .letter-spacing-2 { letter-spacing: 2.7px; } 
    .letter-spacing-3 { letter-spacing: 2.35px; } 

    .uppercase { text-transform: uppercase; }

    .fs-900 { font-size: var(--fs-900); }
    .fs-800 { font-size: var(--fs-800); }
    .fs-700 { font-size: var(--fs-700); }
    .fs-600 { font-size: var(--fs-600); }
    .fs-500 { font-size: var(--fs-500); }
    .fs-400 { font-size: var(--fs-400); }
    .fs-300 { font-size: var(--fs-300); }
    .fs-200 { font-size: var(--fs-200); }

    .fs-900,
    .fs-800,
    .fs-700,
    .fs-600 {
        line-height: 1.1;
    }

`;
