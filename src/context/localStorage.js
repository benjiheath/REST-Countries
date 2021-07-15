const lsHasTheme = localStorage.getItem('theme');

export const setInitialTheme = () => {
  if (!lsHasTheme) {
    localStorage.setItem('theme', 'light');
  }
};
