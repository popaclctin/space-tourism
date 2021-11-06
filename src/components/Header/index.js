import React, { useState } from 'react';

// Components
import Navigation from '../Navigation';
import { Wrapper } from './Header.styled';
import { NavToggle } from './NavToggle.styled';

// Images
import logo from '../../assets/shared/logo.svg';

export default function Header() {
  let [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <div>
        <img src={logo} alt='Logo' className='logo' />
      </div>
      <NavToggle open={open} onClick={() => setOpen(!open)} />
      <Navigation open={open}></Navigation>
    </Wrapper>
  );
}
