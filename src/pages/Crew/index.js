import React from 'react';

import { Wrapper, GridContainerCrew } from './Crew.styled';
import Header from '../../components/Header';
import Dots from '../../components/Dots';

import hurley from '../../assets/crew/image-douglas-hurley.png';
import hurleywebp from '../../assets/crew/image-douglas-hurley.webp';

function Crew() {
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
          <h2>Commander</h2>
          <p class='full-name'>Douglas Hurley</p>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>
        <picture>
          <source srcset={hurleywebp} type='image/webp' />
          <img src={hurley} alt='Douglas Hurley' />
        </picture>
      </GridContainerCrew>
    </Wrapper>
  );
}

export default Crew;
