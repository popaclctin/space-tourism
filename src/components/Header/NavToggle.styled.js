import styled from 'styled-components';

import hamburger from '../../assets/shared/icon-hamburger.svg';
import hamburgerClosed from '../../assets/shared/icon-close.svg';

export const NavToggle = styled.button`
  display: none;
  @media (max-width: 35rem) {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 2rem;
    background: transparent;
    background-image: url(${({ open }) =>
      open ? hamburgerClosed : hamburger});
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }
`;
