import styled from 'styled-components';

import { GridContainer } from '../../styles/GridContainer.styled';

import bgMobile from '../../assets/technology/background-technology-mobile.jpg';
import bgTablet from '../../assets/technology/background-technology-tablet.jpg';
import bgDesktop from '../../assets/technology/background-technology-desktop.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  grid-template-rows: min-content 1fr;
  overflow-x: hidden;
  background-size: cover;
  background-position: bottom center;
  background-image: url(${bgMobile});

  @media (min-width: 35rem) {
    background-image: url(${bgTablet});
  }

  @media (min-width: 45rem) {
    background-image: url(${bgDesktop});
  }

  .numbered-title {
    font-family: var(--ff-sans-cond);
    font-size: var(--fs-500);
    text-transform: uppercase;
    letter-spacing: 4.72px;
    grid-area: title;
  }

  .numbered-title span {
    margin-right: 0.5em;
    font-weight: 700;
    color: rgb(var(--clr-white) / 0.25);
  }

  article p {
    color: rgb(var(--clr-light));
  }

  article .terminology {
    text-transform: uppercase;
    font-size: var(--fs-200);
    letter-spacing: 2.35px;
    padding-bottom: 1rem;
  }

  article h2 {
    text-transform: uppercase;
    font-size: var(--fs-700);
    font-family: var(--ff-serif);
  }

  article .description {
    font-size: var(--fs-300);
  }

  @media (min-width: 35em) {
    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }
  }
`;

export const GridContainerTechnology = styled(GridContainer)`
  display: grid;
  row-gap: 2rem;
  grid-template-areas:
    'title'
    'image'
    'dots'
    'content';
  padding: 0;
  padding-bottom: 4rem;

  & > picture {
    grid-area: image;
    img {
      max-width: 101%;
    }
  }

  & > .num-dots {
    grid-area: dots;
  }

  & > article {
    grid-area: content;
    padding: 0 2rem;
  }

  & > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 35em) {
    .numbered-title {
      margin-left: 2rem;
    }

    & > article {
      padding-inline: min(9rem, 15vw);
    }
  }

  @media (min-width: 45em) {
    grid-template-columns: none;
    justify-content: space-between;
    /* padding-left: min(10rem, 10vw); */
    grid-template-areas:
      '. title title .'
      '. dots content image'
      '. dots content image';

    .numbered-title {
      margin-left: 0;
    }

    & picture img {
      max-width: 100%;
    }

    article .terminology {
      padding: 0;
    }

    article {
      padding-inline: 0;
      max-width: 50ch;
    }

    article h2 {
      white-space: nowrap;
    }

    .num-dots ul {
      flex-direction: column;
    }
  }
`;
