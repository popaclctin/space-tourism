import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    cursor: pointer;
    font-weight: 600;
    color: rgb(var(--clr-white));
    border: 0.1rem solid rgb(var(--clr-white) / 0.25);
    border-radius: 50%;
    aspect-ratio: 1;
    width: 3%;
    background-color: transparent;

    :hover,
    :focus {
      border: 0.1rem solid rgb(var(--clr-white) / 1);
    }
  }

  button.active {
    background-color: rgb(var(--clr-white));
    color: rgb(var(--clr-dark));
  }
`;
