import React, { useState } from 'react';

import { Wrapper } from './NavBar.style';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper open={open}>
      <button
        class='mobile-nav-toggle'
        aria-controls='primary-navigation'
        onClick={() => setOpen(!open)}
      ></button>
      <ul id='primary-navigation' class='primary-navigation'>
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

function toggleMenu() {}
