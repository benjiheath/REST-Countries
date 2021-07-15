import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => `var(--${theme}-bg)`};
  min-height: 100vh;
  transition: var(--trans);

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CountriesContainer = styled.main`
  width: var(--row);
  display: grid;
  grid-template-columns: ${({ smallGrid }) =>
    smallGrid ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(25rem, 1fr))'};
  grid-gap: 8rem;
  padding-bottom: 4rem;

  @media (max-width: 1450px) {
    grid-template-columns: ${({ smallGrid }) =>
      smallGrid ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(23rem, 1fr))'};
    grid-gap: 5vw;
  }

  @media (max-width: 1200px) {
    grid-template-columns: ${({ smallGrid }) =>
      smallGrid ? 'repeat(4, 1fr)' : 'repeat(auto-fit, minmax(22.5rem, 1fr))'};
    grid-gap: 4.3vw;
  }

  @media (max-width: 910px) {
    grid-template-columns: repeat(auto-fit, minmax(21rem, 30%));
    grid-auto-rows: 33vw;
    grid-gap: 4vw;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 45vw;
    justify-content: center;
    grid-gap: 4rem;
    width: 82%;
  }

  @media (max-width: 500px) {
    width: var(--row);
    grid-template-columns: 250px;
    grid-auto-rows: 35rem;
    grid-gap: 5rem;
  }
`;

export const ErrorText = styled.h2`
  font-size: 3rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
