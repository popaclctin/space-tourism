import React from 'react';

import { Wrapper } from './NavBar.style';

export default function NavBar() {
  return (
    <Wrapper>
      <ul>
        <li className='active'>
          <a href='#'>
            <span>00</span>Active
          </a>
        </li>
        <li>
          <a href='#'>
            <span>01</span>Hovered
          </a>
        </li>
        <li>
          <a href='#'>
            <span>02</span>Idle
          </a>
        </li>
      </ul>
    </Wrapper>
  );
}
