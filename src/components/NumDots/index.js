import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './NumDots.styled';

export default function NumDots() {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink to='/technology/vehicle'>1</NavLink>
        </li>
        <li>
          <NavLink to='/technology/port'>2</NavLink>
        </li>
        <li>
          <NavLink to='/technology/capsule'>3</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
}
