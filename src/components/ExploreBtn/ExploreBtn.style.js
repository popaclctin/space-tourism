import styled from 'styled-components';

export const Wrapper = styled.a`
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;
  padding: 0 2em;
  aspect-ratio: 1;
  border-radius: 50%;
  font-family: var(--ff-serif);
  font-size: 2rem;
  color: rgb(var(--clr-dark));
  background-color: rgb(var(--clr-white));
  text-decoration: none;
  text-transform: uppercase;

  max-width: 50%;
  margin: 0 auto;

  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    background: rgba(var(--clr-white) / 0.15);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms linear, transform 750ms ease-in-out;
  }

  :hover::after,
  :focus::after {
    opacity: 1;
    transform: scale(1.5);
  }
`;
