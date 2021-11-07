import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './Tabs.styled';

export default function Tabs() {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink to='/destination/Moon'>Moon</NavLink>
        </li>
        <li>
          <NavLink to='/destination/Mars'>Mars</NavLink>
        </li>
        <li>
          <NavLink to='/destination/Titan'>Titan</NavLink>
        </li>
        <li>
          <NavLink to='/destination/Europa'>Europa</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
}
