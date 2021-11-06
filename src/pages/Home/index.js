import React from 'react';

import { Wrapper } from './Home.styled';
import Header from '../../components/Header';
import MainButton from '../../components/MainButton';
import { GridContainerHome } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <GridContainerHome>
        <div>
          <h1>
            So, you want to travel to <span id='title-space'>Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!{' '}
          </p>
        </div>
        <div>
          <MainButton>Explore</MainButton>
        </div>
      </GridContainerHome>
    </Wrapper>
  );
}
