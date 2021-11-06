import styled from 'styled-components';

export const GridContainer = styled.main`
  display: grid;
  text-align: center;
  place-items: center;
  padding: 0 1rem;
  padding-bottom: 4rem;

  * {
    max-width: 50ch;
  }

  @media (min-width: 45em) {
    text-align: left;
    column-gap: 2rem;
    grid-template-columns:
      minmax(2rem, 1fr) repeat(2, minmax(0, 40rem))
      minmax(2rem, 1fr);

    > *:first-child {
      grid-column: 2;
    }

    > *:last-child {
      grid-column: 3;
    }
  }
`;
