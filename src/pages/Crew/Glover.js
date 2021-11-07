import React from 'react';

import { Wrapper, GridContainerCrew } from './Crew.styled';
import Header from '../../components/Header';
import Dots from '../../components/Dots';

import png from '../../assets/crew/image-victor-glover.png';
import webp from '../../assets/crew/image-victor-glover.webp';

function Glover() {
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
          <h2>Pilot</h2>
          <p class='full-name'>Douglas Hurley</p>
          <p>
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </article>
        <picture>
          <source srcset={webp} type='image/webp' />
          <img src={png} alt='Victor Glover' />
        </picture>
      </GridContainerCrew>
    </Wrapper>
  );
}

export default Glover;
