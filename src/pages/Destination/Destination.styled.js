import styled from 'styled-components';

import { GridContainer } from '../../styles/GridContainer.styled';

import bgMobile from '../../assets/destination/background-destination-mobile.jpg';
import bgTablet from '../../assets/destination/background-destination-tablet.jpg';
import bgDesktop from '../../assets/destination/background-destination-desktop.jpg';

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
    grid-area: title;
  }

  .numbered-title span {
    margin-right: 0.5em;
    font-weight: 700;
    color: hsl(var(--clr-white) / 0.25);
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

  & > img {
    grid-area: image;
    max-width: 60%;
  }

  & > .tab-list {
    grid-area: tabs;
  }

  & > .destination-info {
    grid-area: content;
  }

  .destination-meta {
    flex-direction: column;
    border-top: 1px solid rgb(var(--clr-white) / 0.1);
    padding-top: 2.5rem;
    margin-top: 2.5rem;
  }
`;
