import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  text-align: center;
  place-items: center;
  padding: 0 1rem;

  @media (min-width: 45em) {
    text-align: left;
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

  & * {
    max-width: 50ch;
  }
`;

export const GridContainerHome = styled(GridContainer)`
  @media (min-width: 45em) {
    padding-bottom: max(6rem, 10vh);
    align-items: end;
  }
`;
