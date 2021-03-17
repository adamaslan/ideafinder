import { createGlobalStyle } from "styled-components";

import "rc-slider/assets/index.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizedLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #181818;
    font-family: 'Montserrat', sans-serif;
    color: #FFF;
  }
`;

export default GlobalStyle;
