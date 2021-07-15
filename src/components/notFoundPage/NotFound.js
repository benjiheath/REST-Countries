import React from 'react';
import styled from 'styled-components';
import BackBtn from '../countryPage/BackBtn';

const NotFound = ({ country, setInvalidUrl }) => {
  const message = country ? 'Oops! No such country exists.' : '404 - Page not found';
  const p = country && 'Please check country spelling in the URL';
  const resetUrlState = () => {
    setInvalidUrl(false);
  };

  return (
    <Container>
      <BackBtn text='Back' onClick={country && resetUrlState} />
      <TextContainer>
        <Heading>{message}</Heading>
        <MsgSmall>{p}</MsgSmall>
      </TextContainer>
    </Container>
  );
};

export default NotFound; /*





*/ // Styling

const Container = styled.div`
  padding-top: 4rem;
  width: var(--row);
  height: calc(100vh - 8rem);
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;

  @media (max-width: 500px) {
    top: 40%;
  }
`;

const Heading = styled.h2`
  font-size: 5rem;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const MsgSmall = styled.p`
  font-size: 1.6rem;
`;
