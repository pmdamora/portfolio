import { css } from 'styled-components';

export const fontFaceDeclarations = css`
  /* quattrocento-regular - latin */
  @font-face {
    font-family: 'Quattrocento';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('Quattrocento'),
      url('/static/fonts/quattrocento-v10-latin-regular.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/quattrocento-v10-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* quattrocento-700 - latin */
  @font-face {
    font-family: 'Quattrocento';
    font-display: swap;
    font-style: normal;
    font-weight: 700;
    src: local('Quattrocento Bold'), local('Quattrocento-Bold'),
      url('/static/fonts/quattrocento-v10-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/quattrocento-v10-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  /* quattrocento-sans-regular - latin */
  @font-face {
    font-family: 'Quattrocento Sans';
    font-display: swap;
    font-style: normal;
    font-weight: 400;
    src: local('Quattrocento Sans'), local('QuattrocentoSans'),
      url('/static/fonts/quattrocento-sans-v11-latin-regular.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/quattrocento-sans-v11-latin-regular.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* quattrocento-sans-italic - latin */
  @font-face {
    font-family: 'Quattrocento Sans';
    font-display: swap;
    font-style: italic;
    font-weight: 400;
    src: local('Quattrocento Sans Italic'), local('QuattrocentoSans-Italic'),
      url('/static/fonts/quattrocento-sans-v11-latin-italic.woff2')
        format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/quattrocento-sans-v11-latin-italic.woff')
        format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* quattrocento-sans-700 - latin */
  @font-face {
    font-family: 'Quattrocento Sans';
    font-display: swap;
    font-style: normal;
    font-weight: 700;
    src: local('Quattrocento Sans Bold'), local('QuattrocentoSans-Bold'),
      url('/static/fonts/quattrocento-sans-v11-latin-700.woff2') format('woff2'),
      /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/quattrocento-sans-v11-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
`;
