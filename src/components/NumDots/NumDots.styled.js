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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.5rem;
    height: 2.5rem;
    padding: 0.5em;
    text-decoration: none;
    color: rgb(var(--clr-white));
    cursor: pointer;
    border: 0;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid rgb(var(--clr-white) / 0.5);
  }

  a:hover,
  a:focus {
    border-color: rgb(var(--clr-white) / 1);
  }

  .active {
    background-color: rgb(var(--clr-white) / 1);
    color: rgb(var(--clr-dark));
  }
`;

export const NumbDots = styled(Wrapper)``;
