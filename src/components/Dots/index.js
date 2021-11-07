import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './Dots.styled';

export default function Dots() {
  return (
    <Wrapper>
      <ul>
        <li>
          <span class='sr-only'>The commander</span>
          <NavLink to='/crew/Hurley' />
        </li>
        <li>
          <span class='sr-only'>The mission specialist</span>
          <NavLink to='/crew/Shuttleworth' />
        </li>
        <li>
          <span class='sr-only'>The pilot</span>
          <NavLink to='/crew/Glover' />
        </li>
        <li>
          <span class='sr-only'>The crew engineer</span>
          <NavLink to='/crew/Ansari' />
        </li>
      </ul>
    </Wrapper>
  );
}
