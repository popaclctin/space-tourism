import React from 'react';
import { NavLink } from 'react-router-dom';

import { Wrapper } from './Navigation.styled';

export default function Navigation({ open }) {
  return (
    <Wrapper open={open}>
      <NavLink to='/'>
        <span>00</span>Home
      </NavLink>
      <NavLink to='/destination'>
        <span>01</span>Destination
      </NavLink>
      <li>
        <span>02</span>Crew
      </li>
      <li>
        <span>03</span>Technology
      </li>
    </Wrapper>
  );
}
