import { createGlobalStyle } from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
  :root {
    --primary: #57a6ff;
    --button: #22262c;
    --white: #fffffe;
    --bg: #0d1117;
    --black: #141414;
    --black-1: #171b21;
    --grey: #8b949e;
    --grey-1: #c5ced7;
    --grey-2: #3f4954;
    --pink: #cc68a0;
    --yellow: #f1e05a;
    --purple: #563d7c;
    --headline1: semi bold 1.625rem/2rem Inter;
    --button: 500 0.875rem/1.5rem Inter;
    --headline2-semi-bold: semi bold 1.25rem/1.5rem Inter;
    --headline2-ligth: 300 1.25rem/1.5rem Inter;
    --body1-regular: 400 1rem/1.5rem Inter;
    --body1-semi-bold: 700 1rem/1.5rem Inter;
    --body2-regular: 400 0.875rem/1.5rem Inter;
    --body2-semi-bold: semi bold 0.875rem/1.5rem Inter;
    --caption-regular: 400 0.75rem/1.125rem Inter;
    --caption-medium: 500 0.75rem/1.125rem Inter;
  }

  body {
    border: 10px solid green;
    background: var(--bg);
    color: var(--grey);
    font: var(--body1-regular);
  }

`



export default GlobalStylesStyled
