import styled from 'styled-components';

export const MainButton = styled.a`
  display: inline-grid;
  place-items: center;
  position: relative;
  padding: 0 2em;
  font-family: var(--ff-serif);
  font-size: 2rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 50%;
  color: rgb(var(--clr-dark));
  background-color: rgb(var(--clr-white));
  aspect-ratio: 1;
  z-index: 1;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background: rgba(var(--clr-white) / 0.15);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  &:hover::after,
  &:focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`;
