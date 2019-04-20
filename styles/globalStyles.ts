import { createGlobalStyle } from './styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: ${props => props.theme.colors.text.primary};
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: 18px;
    height: 100%;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.serif};
  }

  a {
    color: ${props => props.theme.colors.text.link};
    text-decoration: none;
    &:hover, &:focus {
      color: ${props => props.theme.colors.text.hover};
      text-decoration: none;
    }
  }

  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;
