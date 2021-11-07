import React from 'react';

import { Wrapper, GridContainerCrew } from './Crew.styled';
import Header from '../../components/Header';
import Dots from '../../components/Dots';

import png from '../../assets/crew/image-anousheh-ansari.png';
import webp from '../../assets/crew/image-anousheh-ansari.webp';

function Ansari() {
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
          <h2>Flight Engineer</h2>
          <p class='full-name'>Anousheh Ansari</p>
          <p>
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </article>
        <picture>
          <source srcset={webp} type='image/webp' />
          <img src={png} alt='Anousheh Ansari' />
        </picture>
      </GridContainerCrew>
    </Wrapper>
  );
}

export default Ansari;
