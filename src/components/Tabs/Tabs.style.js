import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  button {
    cursor: pointer;
    text-transform: uppercase;
    color: rgb(var(--clr-light));
    letter-spacing: 2.7px;
    background-color: rgb(var(--clr-dark));
    font-family: var(--ff-sans-cond);
    padding: 1rem 0;
    border: 0;
    border-bottom: 0.2rem solid rgb(var(--clr-white) / 0);

    :hover,
    :focus {
      border-color: rgb(var(--clr-white) / 0.5);
    }
  }

  button.active {
    color: rgb(var(--clr-white) / 1);
    border-color: rgb(var(--clr-white) / 1);
  }
`;
