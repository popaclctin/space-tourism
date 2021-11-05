import styled from 'styled-components';

export const Wrapper = styled.div`
  .logo {
    z-index: 1000;
    margin: 1.5rem clamp(1.5rem, 5vw, 3.5rem);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
