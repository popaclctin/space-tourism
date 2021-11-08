import React from 'react';
import { Wrapper, GridContainerTechnology } from './Technology.styled';
import Header from '../../components/Header';
import NumDots from '../../components/NumDots';

import portrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import landscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';

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
          <img src={landscape} alt='launch vehicle' />
        </picture>

        <div className='num-dots'>
          <NumDots />
        </div>

        <article>
          <p className='terminology'>The terminology...</p>

          <h2>Launch vehicle</h2>

          <p className='description'>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </article>
      </GridContainerTechnology>
    </Wrapper>
  );
}
