import React from 'react';
import { Wrapper, GridContainerDestination } from './Destination.styled';
import Header from '../../components/Header';
import Tabs from '../../components/Tabs';

import europa from '../../assets/destination/image-europa.png';
import europawebp from '../../assets/destination/image-europa.webp';

export default function Europa() {
  return (
    <Wrapper>
      <Header />
      <GridContainerDestination>
        <h1 class='numbered-title'>
          <span>01</span> Pick your destination
        </h1>
        <picture>
          <source srcSet={europawebp} type='image/webp' />
          <img src={europa} alt='the moon Europa' />
        </picture>

        <div className='tabs-list'>
          <Tabs />
        </div>

        <article>
          <h2>Europa</h2>

          <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>

          <div className='destination_meta'>
            <div>
              <h3>Avg. distance</h3>
              <p>628 mil. km</p>
            </div>
            <div>
              <h3>Est. travel time</h3>
              <p>3 years</p>
            </div>
          </div>
        </article>
      </GridContainerDestination>
    </Wrapper>
  );
}
