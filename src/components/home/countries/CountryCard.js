import React, { useEffect } from 'react';
import styled from 'styled-components';
import Detail from './Detail';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../../context/AppContext';

const CountryCard = ({ flag, name, population, region, capital, length, setSmallGrid }) => {
  const pop = new Intl.NumberFormat().format(population);
  const { search } = useGlobalContext();

  useEffect(() => {
    length < 5 ? setSmallGrid(true) : setSmallGrid(false);
  }, [search]);

  return (
    <Card>
      <Link to={`/countries/${name}`}>
        {<Flag src={flag} />}
        <TextWrapper>
          <CountryName>{name} </CountryName>
          <div>
            <Detail name='Population:' value={pop} fs='1.4rem' />
            <Detail name='Region:' value={region} fs='1.4rem' />
            <Detail name='Capital:' value={capital} fs='1.4rem' />
          </div>
        </TextWrapper>
      </Link>
    </Card>
  );
};

export default CountryCard; /*





*/ // Styling

const Card = styled.div`
  border-radius: 5px;
  overflow: hidden;
  transition: 0.1s linear;

  box-shadow: var(--shadow-hover);

  backface-visibility: hidden;
  background-color: var(--bg-element);
  -webkit-font-smoothing: subpixel-antialiased;
  will-change: auto;

  &:hover {
    box-shadow: var(--shadow-card-hover);
    transform: translateY(0.2rem);
    border: none;
    cursor: pointer;

    & img {
      transition: var(--trans);
      transform: scale(1);
    }
  }
`;

const Flag = styled.img`
  display: block;
  height: 50%;
  width: 100%;
  object-fit: cover;
  flex-basis: 1;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  padding: 1.5rem 2.5rem 3rem;
  height: 50%;
`;

const CountryName = styled.h2`
  font-weight: 800;
  font-size: 1.6rem;
  color: var(--text-color);

  @media (max-width: 910px) {
    margin-bottom: 1rem;
  }
`;
