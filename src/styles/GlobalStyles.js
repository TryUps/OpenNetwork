import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: min(100vh, 100%);
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: 'Roboto', --apple-system, system-ui, sans-serif;
  }

  ul, ol {
    list-style: none;
    padding: 0;
  }

`;