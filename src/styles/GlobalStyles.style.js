import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import SuisseIntlRegular from "../assets/fonts/SuisseIntl/SuisseIntlRegular.otf";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-weight: normal;
  font-family: "Suisse Int'l Regular";
  src: url(${SuisseIntlRegular})
    format("opentype");
}

::-webkit-scrollbar {
    display: none;
}

* {
  padding: 0;
  margin: 0;
}

html {
  height: 100%;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: #272727;
  color: #e5e5e5;
  font-family: "Suisse Int'l Regular";
  font-style: normal;
  font-size: 21px;
  line-height: 1.2;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;
