import React from 'react';

// Components
import NavBar from '../NavBar';

import { Wrapper } from './Header.style';

// Images
import logo from '../../assets/shared/logo.svg';

export default function Header() {
  return (
    <Wrapper>
      <header>
        <div>
          <img src={logo} alt='Logo' className='logo' />
        </div>
        <NavBar></NavBar>
      </header>
    </Wrapper>
  );
}
