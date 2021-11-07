import React from 'react';
import { Wrapper, GridContainerDestination } from './Destination.styled';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import mars from '../../assets/destination/image-mars.png';
import marswebp from '../../assets/destination/image-mars.webp';

export default function Mars() {
  return (
    <Wrapper>
      <Header />
      <GridContainerDestination>
        <h1 class='numbered-title'>
          <span>01</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={marswebp} type='image/webp' />
          <img src={mars} alt='the moon' />
        </picture>

        <div className='tabs-list'>
          <Tabs />
        </div>

        <article>
          <h2>Mars</h2>

          <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>

          <div className='destination_meta'>
            <div>
              <h3>Avg. distance</h3>
              <p>225 mil. km</p>
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>9 months</p>
            </div>
          </div>
        </article>
      </GridContainerDestination>
    </Wrapper>
  );
}
