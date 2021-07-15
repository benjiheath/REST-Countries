import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context/AppContext';
import { BackBtn, BorderCountries, Details } from '.';

const CountryInfo = ({ setInvalidUrl }) => {
  const { countries } = useGlobalContext();
  const { id } = useParams();

  // if user enters an invalud url e.g. '/countries/qwertyuiop', return early & app will render NotFound page.
  // TODO - figure out how to do this more simply with react router
  const countryID = countries.find((country) => country.name === id);
  if (!countryID) {
    setInvalidUrl(true);
    return null;
  }

  const { flag, name: countryName, borders } = countryID;

  return (
    <PageContainer>
      <BackBtn text='Back' />
      <ContentWrapper>
        <FlagWrapper>
          <Flag src={flag} />
        </FlagWrapper>
        <DetailWrapper>
          <CountryName>{countryName}</CountryName>
          <Details id={id} />
          <BorderCountries borders={borders} countries={countries} />
        </DetailWrapper>
      </ContentWrapper>
    </PageContainer>
  );
};

export default CountryInfo; /*





*/ // ------------- Styling

const PageContainer = styled.section`
  width: var(--row);
  padding-top: 4rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 4rem 0;

  @media (max-width: 910px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FlagWrapper = styled.div`
  width: 48%;
  min-height: 43rem;
  max-height: 43rem;

  @media (max-width: 910px) {
    width: 100%;
    min-height: unset;
    max-height: 50vw;
  }

  @media (max-width: 910px) {
    min-height: 25rem;
  }
`;

const Flag = styled.img`
  display: block;
  width: 100%;
  min-height: 43rem;
  max-height: 43rem;
  object-fit: cover;

  @media (max-width: 910px) {
    min-height: unset;
    max-height: 50vw;
  }

  @media (max-width: 910px) {
    min-height: 25rem;
  }
`;

const DetailWrapper = styled.div`
  width: 45%;

  @media (max-width: 910px) {
    width: 100%;
    margin-top: 4rem;
  }
`;

const CountryName = styled.h2`
  color: var(--text-color);
  font-weight: 800;
  font-size: 3.25rem;
  margin-bottom: 2rem;
`;
