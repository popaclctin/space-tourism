import styled from 'styled-components';

export const Wrapper = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 2rem;
  }

  a {
    display: block;
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    aspect-ratio: 1;
    padding: 0.5em;
    background-color: rgb(var(--clr-white) / 0.25);
  }

  a:hover,
  a:focus {
    background-color: rgb(var(--clr-white) / 0.5);
  }

  .active {
    background-color: rgb(var(--clr-white) / 1);
  }
`;
