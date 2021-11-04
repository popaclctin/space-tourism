import styled from 'styled-components';

import bgMobile from '../../assets/home/background-home-mobile.jpg';
import bgTablet from '../../assets/home/background-home-tablet.jpg';
import bgDesktop from '../../assets/home/background-home-desktop.jpg';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;

  background-size: cover;
  background-position: bottom center;
  background-image: url(${bgMobile});

  @media (min-width: 35rem) {
    background-image: url(${bgTablet});
  }

  @media (min-width: 45rem) {
    background-image: url(${bgDesktop});
  }
`;
