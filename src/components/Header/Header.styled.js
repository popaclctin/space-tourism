import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  @media (min-width: 45em) {
    ::after {
      content: '';
      display: block;
      position: relative;
      height: 1px;
      width: 100%;
      margin-right: -1.5rem;
      background: rgb(var(--clr-white) / 0.25);
      order: 1;
    }
  }
`;
