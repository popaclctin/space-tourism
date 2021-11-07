import styled from 'styled-components';

import { GridContainer } from '../../styles/GridContainer.styled';

import bgMobile from '../../assets/crew/background-crew-mobile.jpg';
import bgTablet from '../../assets/crew/background-crew-tablet.jpg';
import bgDesktop from '../../assets/crew/background-crew-desktop.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
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
  }

  .numbered-title span {
    margin-right: 0.5em;
    font-weight: 700;
    color: rgb(var(--clr-white) / 0.25);
  }

  .crew-details h2 {
    text-transform: uppercase;
    font-size: var(--fs-600);
    font-family: var(--ff-serif);
    opacity: 0.5;
  }

  .crew-details .full-name {
    text-transform: uppercase;
    font-size: var(--fs-700);
    font-family: var(--ff-serif);
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

export const GridContainerCrew = styled(GridContainer)`
  display: grid;
  gap: 2rem;
  grid-template-areas:
    'title'
    'image'
    'dots'
    'content';

  & > .numbered-title {
    grid-area: title;
  }

  & > picture {
    grid-area: image;
    max-width: 60%;
    border-bottom: 1px solid rgb(var(--clr-white) / 0.1);
  }

  & > .dots-list {
    grid-area: dots;
  }

  & > .crew-details {
    grid-area: content;
  }

  & > * + * {
    margin-top: 2rem;
  }

  @media (min-width: 35em) {
    grid-template-columns: none;
    padding-bottom: 0;
    grid-template-areas:
      'title'
      'content'
      'dots'
      'image';

    & > picture {
      max-width: 90%;
      align-self: end;
    }

    .destination_meta {
      gap: min(6vw, 6rem);
      justify-content: flex-start;
    }
  }

  @media (min-width: 45em) {
    grid-template-areas:
      '. title title .'
      '. content image .'
      '. dots image .';

    > .dots-list,
    > .crew-details {
      justify-self: start;
    }
  }
`;
