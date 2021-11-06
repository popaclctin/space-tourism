import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2.5rem;

  > * {
    padding: 0.5em 0;
    font-family: var(--ff-sans-cond);
    text-transform: uppercase;
    letter-spacing: 4.75px;
    color: rgb(var(--clr-light));
    background-color: transparent;
    border: 0;
    border-bottom: 0.2rem solid rgb(var(--clr-white) / 0);
    cursor: pointer;
  }

  > *:hover,
  > *:focus {
    border-color: rgb(var(--clr-white) / 0.5);
  }

  > [aria-selected='true'] {
    color: rgb(var(--clr-white) / 1);
    border-color: rgb(var(--clr-white) / 1);
  }
`;
