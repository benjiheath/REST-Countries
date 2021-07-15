import styled from 'styled-components';
import { useGlobalContext } from '../../../context/AppContext';
import FilterDropDown from './FilterDropDown';
import { MdSearch } from 'react-icons/md';

const Actions = () => {
  const { theme, setSearch } = useGlobalContext();

  const handleSearch = (e) => {
    const query = String(e.target.value).toLowerCase();
    if (query.length === 0) {
      setSearch('');
      return;
    }
    setSearch(query);
  };

  return (
    <FlexWrapper>
      <SearchWrapper>
        <MdSearch />
        <SearchBar
          type='text'
          placeholder='Search for a country...'
          theme={theme}
          onChange={handleSearch}
        />
      </SearchWrapper>
      <MenuWrapper>
        <FilterDropDown sorting />
        <FilterDropDown />
      </MenuWrapper>
    </FlexWrapper>
  );
};

export default Actions; /*




*/ //  Styling

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--row);
  padding: 4rem 0;

  @media (max-width: 910px) {
    flex-direction: column;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 40rem;
  position: relative;

  & svg {
    fill: #999;
    font-size: 2.25rem;
    position: absolute;
    left: 2.7rem;
    transition: 0.4s;
  }

  &:hover svg {
    transform: scale(1.1);
    fill: var(--text-color);
  }

  @media (max-width: 700px) {
    min-width: 300px;

    width: 95%;
  }
`;

const SearchBar = styled.input`
  border: none;
  background-color: ${({ theme }) => `var(--${theme})`};
  transition: var(--trans);
  padding: 1.5rem 2.5rem;
  padding-left: 7rem;
  border-radius: 5px;
  box-shadow: ${({ theme }) => `var(--shadow-input-${theme})`};
  font-size: 1.3rem;
  font-weight: 600;
  width: 100%;
  margin-left: --20px;
  color: ${({ theme }) => `var(--${theme}-text)`};

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) =>
      theme === 'dark'
        ? '0px 8px 15px 2px rgba(0, 0, 0, 0.25)'
        : `var(--shadow-input-focus-${theme})`};

    transform: translateY(-0.2rem);
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 910px) {
    width: 40rem;
    margin-top: 4rem;
  }

  @media (max-width: 700px) {
    min-width: 300px;
    width: 95%;
    margin-top: 2rem;
  }
`;
