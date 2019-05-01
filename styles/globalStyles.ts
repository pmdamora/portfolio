import { createGlobalStyle } from 'styled-components';

import {
  Color,
  FontSize,
  FontFamily,
  fontFaceDeclarations
} from '@portfolio/styles';

export const GlobalStyle = createGlobalStyle`
  ${fontFaceDeclarations}

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    color: ${Color.GRAY_5};
    font-family: ${FontFamily.BODY};
    font-size: ${FontSize.LARGE};
    height: 100%;
    margin: 0;
  }

 h1, h2, h3, h4, h5, h6 {
    font-family: ${FontFamily.HEADING}
  }

  a {
    color: ${Color.RED};
    cursor: pointer;
    text-decoration: none;
    &:hover, &:focus {
      color: ${Color.BLACK};
      text-decoration: none;
    }
  }

  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;
