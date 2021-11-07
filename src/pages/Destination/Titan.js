import React from 'react';
import { Wrapper, GridContainerDestination } from './Destination.styled';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import titan from '../../assets/destination/image-titan.png';
import titanwebp from '../../assets/destination/image-titan.webp';

export default function Titan() {
  return (
    <Wrapper>
      <Header />
      <GridContainerDestination>
        <h1 class='numbered-title'>
          <span>01</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={titanwebp} type='image/webp' />
          <img src={titan} alt='the moon' />
        </picture>

        <div className='tabs-list'>
          <Tabs />
        </div>

        <article>
          <h2>Titan</h2>

          <p>
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>

          <div className='destination_meta'>
            <div>
              <h3>Avg. distance</h3>
              <p>1.6 bil. km</p>
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>7 years</p>
            </div>
          </div>
        </article>
      </GridContainerDestination>
    </Wrapper>
  );
}
