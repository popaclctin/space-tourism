import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;

  @media (min-width: 45rem) {
    grid-template-columns: minmax(2rem, 1fr) repeat(2, minmax(0, 40rem)) minmax(
        2rem,
        1fr
      );
    column-gap: 2rem;

    > *:first-child {
      grid-column: 2;
    }

    > *:last-child {
      grid-column: 3;
    }
  }
`;
