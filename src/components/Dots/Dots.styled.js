import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;

  > * {
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: 0.5em;
    background-color: rgb(var(--clr-white) / 0.25);
  }

  > *:hover,
  > *:focus {
    background-color: rgb(var(--clr-white) / 0.5);
  }

  > [aria-selected='true'] {
    background-color: rgb(var(--clr-white) / 1);
  }
`;
