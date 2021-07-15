import axios from 'axios';
import { createContext, useReducer, useContext, useEffect } from 'react';
import { globalReducer } from './globalReducer';
import { setInitialTheme } from './localStorage';

export const AppContext = createContext();

// initialize theme based on local storage
setInitialTheme();

const initialState = {
  loading: false,
  reLoading: false,
  error: false,
  countries: null,
  filter: null,
  sortMode: null,
  search: '',
  invalidCountry: false,
  theme: localStorage.getItem('theme'),
};

const AppProvider = (props) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const dispatchers = {
    setLoading: (value) => {
      dispatch({
        type: 'SET_LOADING',
        payload: value,
      });
    },

    setError: (value) => {
      dispatch({
        type: 'SET_ERROR',
        payload: value,
      });
    },
    setCountries: (value) => {
      dispatch({
        type: 'SET_COUNTRIES',
        payload: value,
      });
    },
    setFilter: (value) => {
      dispatch({
        type: 'SET_FILTER',
        payload: value,
      });
    },
    setSortMode: (value) => {
      dispatch({
        type: 'SET_SORT',
        payload: value,
      });
    },
    setSearch: (value) => {
      dispatch({
        type: 'SET_SEARCH',
        payload: value,
      });
    },
    setInvalidCountry: (value) => {
      dispatch({
        type: 'SET_INVALID_COUNTRY',
        payload: value,
      });
    },
    toggleTheme: () => {
      dispatch({ type: 'TOGGLE_THEME' });
      state.theme === 'dark'
        ? localStorage.setItem('theme', 'light')
        : localStorage.setItem('theme', 'dark');
    },
  };

  // Fetch

  const { setLoading, setError, setCountries } = dispatchers;

  const getCountries = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await axios.get('https://restcountries.eu/rest/v2/all');
      const data = res.data;
      setCountries(data);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError(`${err}`);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        ...dispatchers,
        getCountries,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
