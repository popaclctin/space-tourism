import styled from 'styled-components';

export const Wrapper = styled.nav`
  ul {
    display: flex;
    gap: 8rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul > * {
    padding: 1rem 0;
    border-bottom: 0.2rem solid rgb(var(--clr-white) / 0);
  }

  ul > *:hover,
  ul > *:focus {
    border-color: rgb(var(--clr-white) / 0.5);
  }

  ul > .active {
    border-color: rgb(var(--clr-white) / 1);
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
