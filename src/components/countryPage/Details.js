import styled from 'styled-components';
import { useGlobalContext } from '../../context/AppContext';
import Detail from '../home/countries/Detail';

const Details = ({ id }) => {
  const { countries } = useGlobalContext();

  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
  } = countries.find((country) => country.name === id);

  return (
    <Wrapper>
      <Detail name='Native name:' value={nativeName} v2 />
      <Detail name='Population:' value={population} v2 />
      <Detail name='Region:' value={region} v2 />
      <Detail name='Sub Region:' value={subregion} v2 />
      <Detail name='Capital:' value={capital} v2 />
      <Detail name='Top Level Domain:' value={topLevelDomain} v2 />
      <Detail name='Currencies:' value={[...currencies.map((c) => c.code)]} v2 />
      <Detail name='Languages:' value={[...languages.map((l) => l.name)]} v2 />
    </Wrapper>
  );
};

export default Details; /*





*/ // Styling

const Wrapper = styled.div`
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-between;

  @media (max-width: 910px) {
    align-content: flex-start;
    column-gap: 6vw;
  }

  @media (max-width: 700px) {
    height: unset;

    & div:nth-child(5) {
      margin-bottom: 3rem;
    }
  }
`;
