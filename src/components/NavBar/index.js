import React from 'react';

import { Wrapper } from './NavBar.style';

export default function NavBar() {
  return (
    <Wrapper>
      <ul>
        <li className='active'>
          <a href='#'>
            <span>00</span>Home
          </a>
        </li>
        <li>
          <a href='#'>
            <span>01</span>Destination
          </a>
        </li>
        <li>
          <a href='#'>
            <span>02</span>Crew
          </a>
        </li>
        <li>
          <a href='#'>
            <span>03</span>Technology
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}
