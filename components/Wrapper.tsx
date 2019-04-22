import React, { Fragment } from 'react';

import { ThemeProvider } from '@portfolio/styles/styled-components';
import { theme, GlobalStyle } from '@portfolio/styles';

import { GOOGLE_FONTS_API } from '@portfolio/constants';

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <link href={GOOGLE_FONTS_API} rel="stylesheet" />
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default Wrapper;
