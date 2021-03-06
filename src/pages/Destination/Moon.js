import React from 'react';
import { Wrapper, GridContainerDestination } from './Destination.styled';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import moon from '../../assets/destination/image-moon.png';
import moonwebp from '../../assets/destination/image-moon.webp';

export default function Moon() {
  return (
    <Wrapper>
      <Header />
      <GridContainerDestination>
        <h1 class='numbered-title'>
          <span>01</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={moonwebp} type='image/webp' />
          <img src={moon} alt='the moon' />
        </picture>

        <div className='tabs-list'>
          <Tabs />
        </div>

        <article>
          <h2>Moon</h2>

          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>

          <div className='destination_meta'>
            <div>
              <h3>Avg. distance</h3>
              <p>384,400 km</p>
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>3 days</p>
            </div>
          </div>
        </article>
      </GridContainerDestination>
    </Wrapper>
  );
}
