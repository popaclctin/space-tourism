import styled from 'styled-components';

import { GridContainer } from '../../styles/GridContainer.styled';

import bgMobile from '../../assets/destination/background-destination-mobile.jpg';
import bgTablet from '../../assets/destination/background-destination-tablet.jpg';
import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';

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

  article h2 {
    text-transform: uppercase;
    font-size: var(--fs-800);
    font-family: var(--ff-serif);
  }

  .destination_meta {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    border-top: 1px solid rgb(var(--clr-white) / 0.1);
    padding-top: 2.5rem;
    margin-top: 2.5rem;
  }

  .destination_meta h3 {
    color: rgb(var(--clr-light));
    font-size: var(--fs-200);
    text-transform: uppercase;
  }

  .destination_meta p {
    font-size: 1.75rem;
    font-family: var(--ff-serif);
    text-transform: uppercase;
  }

  @media (min-width: 35em) {
    .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }

    .destination_meta {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;

export const GridContainerDestination = styled(GridContainer)`
  display: grid;
  gap: 2rem;
  grid-template-areas:
    'title'
    'image'
    'tabs'
    'content';

  & > picture {
    grid-area: image;
    max-width: 60%;
  }

  & > .tabs-list {
    grid-area: tabs;
  }

  & > article {
    grid-area: content;
  }

  & > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 45em) {
    grid-template-columns: none;
    justify-items: start;
    align-content: start;
    grid-template-areas:
      '. title title .'
      '. image tabs .'
      '. image content .';

    & picture {
      max-width: 90%;
    }

    .destination_meta {
      gap: min(6vw, 6rem);
      justify-content: flex-start;
    }
  }
`;
