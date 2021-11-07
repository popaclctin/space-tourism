import React from 'react';

import { Wrapper, GridContainerCrew } from './Crew.styled';
import Header from '../../components/Header';
import Dots from '../../components/Dots';

import png from '../../assets/crew/image-mark-shuttleworth.png';
import webp from '../../assets/crew/image-mark-shuttleworth.webp';

function Shuttleworth() {
  return (
    <Wrapper>
      <Header />
      <GridContainerCrew>
        <h1 class='numbered-title'>
          <span>02</span> Meet your crew
        </h1>
        <div className='dots-list'>
          <Dots />
        </div>
        <article class='crew-details'>
          <h2>Mission Specialist</h2>
          <p class='full-name'>Mark Shuttleworth</p>
          <p>
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </article>
        <picture>
          <source srcset={webp} type='image/webp' />
          <img src={png} alt='Mark Shuttleworth' />
        </picture>
      </GridContainerCrew>
    </Wrapper>
  );
}

export default Shuttleworth;
