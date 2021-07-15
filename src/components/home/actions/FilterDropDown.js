import { useGlobalContext } from '../../../context/AppContext';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './menuStyling.css';

const optionsFilter = [
  { value: 'Africa', label: 'Africa' },
  { value: 'Americas', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
  { value: null, label: 'All' },
];

const optionsSort = [
  { value: 'Name', label: 'Name \u2193' },
  { value: 'NameReverse', label: 'Name \u2191' },
  { value: 'populationDesc', label: `Population   \u2191` },
  { value: 'populationAsc', label: 'Population  \u2193' },
];

const FilterDropDown = ({ sorting }) => {
  const { theme, filter, setFilter, setSortMode, sortMode } = useGlobalContext();

  const handleFilter = (option) => {
    if (!option.value) {
      setFilter(null);
      return;
    }
    setFilter(option.value);
  };

  const handleSort = (option) => {
    setSortMode(option.value);
  };

  return (
    <Dropdown
      options={sorting ? optionsSort : optionsFilter}
      value={sorting ? sortMode : filter}
      controlClassName={`control ${theme === 'dark' && 'control-dark'}`}
      menuClassName={`menu ${theme === 'dark' ? 'menu-dark' : 'menu-light'}`}
      arrowClassName='arrow'
      placeholder={sorting ? 'Sort' : 'Filter by Region'}
      onChange={sorting ? handleSort : handleFilter}
    />
  );
};

export default FilterDropDown;
