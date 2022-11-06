import styled,{ createGlobalStyle } from "styled-components";
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
  background-color:  #FFFFFF;
  color:#272727;
  font-family: "Suisse Int'l Regular","Gill Sans",  sans-serif;
  font-style: normal;
  font-size: 16px;
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
