import React from 'react';

import { Wrapper } from './Navigation.styled';

export default function Navigation({ open }) {
  return (
    <Wrapper open={open}>
      <li className='active'>
        <span>00</span>Home
      </li>
      <li>
        <span>01</span>Destination
      </li>
      <li>
        <span>02</span>Crew
      </li>
      <li>
        <span>03</span>Technology
      </li>
    </Wrapper>
  );
}
