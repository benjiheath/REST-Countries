import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BorderCountry = ({ countryName }) => {
  // shorten bracketed country names, e.g "Macedonia (the former Yugoslav Republic of)"
  const nameShort = () => {
    return countryName.includes('(') ? countryName.slice(0, countryName.indexOf('(')) : countryName;
  };

  return (
    <Link to={`/countries/${countryName}`}>
      <Wrapper>{nameShort()}</Wrapper>
    </Link>
  );
};

export default BorderCountry; /*





*/ // Styling

const Wrapper = styled.button`
  font-size: 1.4rem;
  font-weight: 600;
  border: none;
  border-radius: 3px;
  box-shadow: var(--shadow-bl);
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin: 0 1.5rem 1.5rem 0;
  min-width: 8rem;
  background-color: var(--bg-element);
  color: var(--text-color);
  transition: var(--trans);

  &:hover {
    box-shadow: var(--shadow-btn-hover);
    transform: translateY(0.025rem);
  }

  &:active {
    transform: translateY(0.1rem) scale(0.98);
    box-shadow: none;
    transition: 0s;
  }
`;
