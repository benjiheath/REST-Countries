import styled from 'styled-components';
import { Name } from '../home/countries/Detail';
import BorderCountry from './BorderCountry';

const BorderCountries = ({ borders, countries }) => {
  const getBorderCountries = borders.map((border) => {
    const borderCountry = countries.find((country) => country.alpha3Code === border);
    return { name: borderCountry.name, a3c: borderCountry.alpha3Code };
  });

  return (
    <Wrapper>
      <Label>Border Countries:</Label>
      <Borders>
        {getBorderCountries.length > 0 ? (
          getBorderCountries.map((country) => (
            <BorderCountry countryName={country.name} key={country.name} />
          ))
        ) : (
          <NoBorders>No borders</NoBorders>
        )}
      </Borders>
    </Wrapper>
  );
};

export default BorderCountries; /*





*/ // Styling

const Wrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 910px) {
    justify-content: flex-start;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

const Borders = styled.div`
  flex-basis: 75%;

  display: flex;
  flex-wrap: wrap;
`;

const Label = styled(Name)`
  font-size: 1.6rem;
  color: var(--text-color);
  margin-top: 0.25rem;

  @media (max-width: 910px) {
    margin-right: 1.5rem;
  }
`;

const NoBorders = styled.p`
  font-size: 1.6rem;
  color: var(--text-color);
  margin-top: 0.25rem;
`;
