import React, { useState } from 'react';
import { useGlobalContext } from '../../../context/AppContext';
import { CountriesContainer, ErrorText } from '../../containers';
import CountryCard from './CountryCard';
import Spinner from '../../Spinner';

const Countries = () => {
  const { countries, loading, filter, search, sortMode, error } = useGlobalContext();

  const [smallGrid, setSmallGrid] = useState(false); // state for conditional grid container styling when 5 > Cards from search

  //! could not chain reverse() conditionally so create a custom method
  Array.prototype.reverseName = function () {
    if (sortMode === 'NameReverse') {
      return this.reverse();
    } else {
      return this;
    }
  };

  return (
    <CountriesContainer smallGrid={smallGrid}>
      {loading && <Spinner />}
      {error && <ErrorText>{error}</ErrorText>}
      {!loading &&
        countries &&
        countries
          .filter((country) => (filter ? country.region === filter : country))
          .filter((country) => country.name.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            switch (sortMode) {
              case 'populationDesc':
                return b.population - a.population;
              case 'populationAsc':
                return a.population - b.population;
              default:
                return null;
            }
          })
          .reverseName()
          .map((country, _, arr) => (
            <CountryCard
              key={country.name}
              {...country}
              length={arr.length}
              setSmallGrid={setSmallGrid}
            />
          ))}
    </CountriesContainer>
  );
};

export default Countries;
