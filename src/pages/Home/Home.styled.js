import styled from 'styled-components';

import { GridContainer } from '../../styles/GridContainer.styled';

import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import bgDesktop from '../../assets/home/background-home-desktop.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  overflow-x: hidden;

  background-size: cover;
  background-position: bottom center;
  background-image: url(${bgMobile});

  h1 {
    color: rgb(var(--clr-light));
    font-size: fs-500;
    font-family: var(--ff-sans-cond);
    letter-spacing: 4.75px;
    text-transform: uppercase;

    > span {
      color: rgb(var(--clr-white));
      font-size: fs-900;
      font-family: var(--ff-serif);
    }
  }

  #title-space {
    display: block;
  }

  @media (min-width: 35rem) {
    background-image: url(${bgTablet});
  }

  @media (min-width: 45rem) {
    background-image: url(${bgDesktop});
  }
`;

export const GridContainerHome = styled(GridContainer)`
  @media (min-width: 45em) {
    padding-bottom: max(6rem, 10vh);
    align-items: end;
  }
`;
