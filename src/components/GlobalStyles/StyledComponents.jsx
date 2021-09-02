//* 1.- Imports
//* ---------------------------------------------------------------------------
import { createGlobalStyle } from 'styled-components';
//* ---------------------------------------------------------------------------

//* 2.- Reusable Components
//* ---------------------------------------------------------------------------
//* 2.1.- Container
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------

//* 3.- Used components
//* ---------------------------------------------------------------------------
//* 3.1.- Global Styled
//* ---------------------------------------------------------------------------
const GlobalStyled = createGlobalStyle`
 *,
 *::before,
 *::after {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
}

html {
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 font-size: 1rem;
}

body {
 scroll-behavior: smooth;
 overflow-x: hidden;
}
`;
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------

//* 4.- Exported components
//* ---------------------------------------------------------------------------
export { GlobalStyled };
//* ---------------------------------------------------------------------------
