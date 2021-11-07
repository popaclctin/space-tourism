import styled from 'styled-components';

export const Wrapper = styled.ul`
  order: 2; // to help position the line before the navigation
  display: flex;
  gap: clamp(0.5rem, 5vw, 3rem);
  padding: 0;
  margin: 0;
  font-family: --ff-sans-cond;
  text-transform: uppercase;
  letter-spacing: 2.7px;
  list-style: none;
  background: rgb(var(--clr-dark) / 0.95);

  @supports (backdrop-filter: blur(1rem)) {
    background: rgb(var(--clr-white) / 0.05);
    backdrop-filter: blur(2rem);
  }

  @media (max-width: 35rem) {
    flex-direction: column;
    column-gap: 0.5rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 30%;
    bottom: 0;
    padding: min(30rem, 10vh) 2rem;
    margin: 0;
    z-index: 1000;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-in-out;
  }

  a {
    text-decoration: none;
    display: block;
    padding: 1em 0;
    color: rgb(var(--clr-white));
    border-bottom: 0.2rem solid rgb(var(--clr-white) / 0);
    cursor: pointer;
  }

  span {
    font-weight: 700;
    margin-right: 0.5em;
  }

  a:hover,
  a:focus {
    border-color: rgb(var(--clr-white) / 0.5);
  }

  .active {
    border-color: rgb(var(--clr-white) / 1);
  }

  @media (min-width: 35em) {
    padding: 0 clamp(1rem, 2vw, 3rem);
  }

  @media (min-width: 35em) and (max-width: 44.9999em) {
    span {
      display: none;
    }
  }

  @media (min-width: 45em) {
    margin-block: 2rem;
  }
`;
