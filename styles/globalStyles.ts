import { createGlobalStyle } from './styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.gray5};
    font-family: ${props => props.theme.fontFamilies.body};
    font-size: 18px;
    height: 100%;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fontFamilies.heading};
  }

  a {
    color: ${props => props.theme.colors.red};
    text-decoration: none;
    &:hover, &:focus {
      color: ${props => props.theme.colors.black};
      text-decoration: none;
    }
  }

  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;
