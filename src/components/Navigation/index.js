import React from 'react';
import { NavLink } from 'react-router-dom';

import { Wrapper } from './Navigation.styled';

export default function Navigation({ open }) {
  return (
    <Wrapper open={open}>
      <li>
        <NavLink exact to='/' activeClassName='active'>
          <span>00</span>Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/destination' activeClassName='active'>
          <span>01</span>Destination
        </NavLink>
      </li>
      <li>
        <NavLink to='/crew' activeClassName='active'>
          <span>02</span>Crew
        </NavLink>
      </li>
      <li>
        <NavLink to='/technology' activeClassName='active'>
          <span>03</span>Technology
        </NavLink>
      </li>
    </Wrapper>
  );
}
