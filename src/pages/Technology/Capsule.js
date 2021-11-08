import React from 'react';
import { Wrapper, GridContainerTechnology } from './Technology.styled';
import Header from '../../components/Header';
import NumDots from '../../components/NumDots';

import portrait from '../../assets/technology/image-space-capsule-portrait.jpg';
import landscape from '../../assets/technology/image-space-capsule-landscape.jpg';

export default function Capsule() {
  return (
    <Wrapper>
      <Header />
      <GridContainerTechnology>
        <h1 class='numbered-title'>
          <span>03</span> Space Launch 101
        </h1>
        <picture>
          <source srcset={portrait} media='(min-width: 45em)' />
          <img src={landscape} alt='space capsule' />
        </picture>

        <div className='num-dots'>
          <NumDots />
        </div>

        <article>
          <p className='terminology'>The terminology...</p>

          <h2>Space Capsule</h2>

          <p className='description'>
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </article>
      </GridContainerTechnology>
    </Wrapper>
  );
}
