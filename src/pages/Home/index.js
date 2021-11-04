import React from 'react';

//Components
import ExploreBtn from '../../components/ExploreBtn';
import Header from '../../components/Header';

import { Wrapper } from './Home.style';
import { GridContainerHome } from '../../styles/GridContainer.style';

export default function Home() {
  return (
    <Wrapper>
      {/* <Header /> */}
      <GridContainerHome>
        <div>
          <h1 className='text-accent fs-500 ff-sans-cond uppercase letter-spacing-1'>
            So, you want to travel to{' '}
            <span className='fs-900 ff-serif text-white d-block'>Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <ExploreBtn></ExploreBtn>
        </div>
      </GridContainerHome>
    </Wrapper>
  );
}
