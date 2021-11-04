import React from 'react';

// Components
import NavBar from '../NavBar';

// Images
import logo from '../../assets/shared/logo.svg';

export default function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt='Logo' />
      </div>
      <NavBar></NavBar>
    </header>
  );
}
