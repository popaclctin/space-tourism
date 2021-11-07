import styled from 'styled-components';

export const Wrapper = styled.div`
  ul {
    display: flex;
    gap: 2.5rem;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    display: block;
    color: rgb(var(--clr-light));
    padding: 0.5em 0;
    font-family: var(--ff-sans-cond);
    text-transform: uppercase;
    letter-spacing: 4.75px;

    background-color: transparent;
    border: 0;
    border-bottom: 0.2rem solid rgb(var(--clr-white) / 0);
    cursor: pointer;
  }

  a:hover,
  a:focus {
    border-color: rgb(var(--clr-white) / 0.5);
  }

  .active {
    color: rgb(var(--clr-white) / 1);
    border-color: rgb(var(--clr-white) / 1);
  }
`;
