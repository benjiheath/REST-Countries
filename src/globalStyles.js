import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{

    // Dark mode
    --dark: hsl(209, 23%, 22%);
    --dark-bg:hsl(207, 26%, 17%);
    --dark-text: #fff;
    --dark-toggle-hover: hsl(208, 23%, 21%);
    --dark-ds: drop-shadow(0px -0px 15px #fdffa8);

    // Light mode
    --light: #fff; // dark mode text &
    --light-bg: hsl(0, 0%, 98%);
    --light-text: hsl(200, 15%, 8%);
    --light-input: hsl(0, 0%, 52%);
    --light-toggle-hover: hsl(0, 0%, 95%);
    --light-ds: drop-shadow(-5px 5px 0px white);

    // dimensions
    --row: 1350px;

    @media (max-width: 1450px) {
        --row: 92vw; 
    }

    @media (max-width: 700px) {
        --row: 90vw; 
    }

    // misc
    --trans: 0.15s linear;
    --shadow-light: 1px 1px 5px 1px rgba(0, 0, 0, 0.05);
    --shadow-input-light: 1px 1px 15px 1px rgba(0, 0, 0, 0.05);
    --shadow-input-focus-light: 1px 7px 9px 1px rgba(0, 0, 0, 0.1);
    --shadow-card-hover-light: 0px 12px 20px 8px rgba(0, 0, 0, 0.1);
    --shadow-dark: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
    --shadow-input-dark: 1px 1px 15px 1px rgba(0, 0, 0, 0.075);
    --shadow-input-focus-dark: 1px 1px 10px 3px rgba(0, 0, 0, 0.175);
    --shadow-card-hover-dark: 0px 12px 20px 8px rgba(0, 0, 0, 0.25);
    --shadow-dm-hov: 0px 2px 0px 5px rgba(0,0,0,0.5);
}

*,
*::after,
*::before{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html{
  font-size: 62.5%;

  @media (max-width: 1200px) {
    font-size: 50%;
  }

  @media (max-width: 500px) {
      font-size: 56.75%;
  }
}

body {
   font-family: 'Nunito Sans';
   font-weight: 300;
   line-height: 1.6;
   color: var(--text-color);
}

button, input, a, select {
    font: inherit;
    color: inherit;
    text-decoration: none;
}
`;

export default GlobalStyle;
