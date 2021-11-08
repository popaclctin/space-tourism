import React from 'react';
import { Wrapper, GridContainerTechnology } from './Technology.styled';
import Header from '../../components/Header';
import NumDots from '../../components/NumDots';

import portrait from '../../assets/technology/image-spaceport-portrait.jpg';
import landscape from '../../assets/technology/image-spaceport-landscape.jpg';

export default function Port() {
  return (
    <Wrapper>
      <Header />
      <GridContainerTechnology>
        <h1 class='numbered-title'>
          <span>03</span> Space Launch 101
        </h1>
        <picture>
          <source srcset={portrait} media='(min-width: 45em)' />
          <img src={landscape} alt='spaceport' />
        </picture>

        <div className='num-dots'>
          <NumDots />
        </div>

        <article>
          <p className='terminology'>The terminology...</p>

          <h2>Spaceport</h2>

          <p className='description'>
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </article>
      </GridContainerTechnology>
    </Wrapper>
  );
}
