import styled from 'styled-components';

import hamburger from '../../assets/shared/icon-hamburger.svg';
import hamburgerClose from '../../assets/shared/icon-close.svg';

export const Wrapper = styled.nav`
  .primary-navigation {
    list-style: none;
    margin: 0;
    padding: 0;
    background: rgb(var(--clr-dark) / 0.95);
  }

  @supports (backdrop-filter: blur(2rem)) {
    .primary-navigation {
      background: rgb(var(--clr-dark) / 0.1);
      backdrop-filter: blur(2rem);
    }
  }

  .mobile-nav-toggle {
    display: none;
  }

  @media (max-width: 35rem) {
    .primary-navigation {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 30%;
      z-index: 1000;
      list-style: none;
      margin: 0;
      padding: min(20rem, 10vh) 2rem;
      transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
      transition: transform 0.5s ease-in-out;
    }

    .mobile-nav-toggle {
      display: block;
      position: absolute;
      z-index: 2000;
      right: 1rem;
      top: 2rem;
      background: transparent;
      background-image: url(${({ open }) =>
        open ? hamburgerClose : hamburger});
      background-repeat: no-repeat;
      background-position: center;
      border: 0;
      width: 1.5rem;
      aspect-ratio: 1;
    }
  }

  .primary-navigation > * {
    cursor: pointer;
    padding: 1rem 0;
    border: 0;
    border-bottom: 0.2rem solid rgb(var(--clr-white) / 0);
  }

  .primary-navigation > *:hover,
  .primary-navigation > *:focus {
    border-color: rgb(var(--clr-white) / 0.5);
  }

  .primary-navigation > .active {
    border: 0;
  }

  li a {
    color: var(--clr-white);
    letter-spacing: 2.7px;
    text-transform: uppercase;
    text-decoration: none;
  }

  li a > span {
    font-weight: 700;
    margin-right: 0.5em;
  }
`;
