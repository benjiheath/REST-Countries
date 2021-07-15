export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_COUNTRIES':
      return { ...state, countries: action.payload };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_SORT':
      return { ...state, sortMode: action.payload };
    case 'SET_INVALID_COUNTRY':
      return { ...state, invalidCountry: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };

    default:
      throw new Error(`Error with action: ${action}`);
  }
};
