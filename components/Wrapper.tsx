import React, { Fragment } from 'react';

import { ThemeProvider } from '@portfolio/styles/styled-components';
import { theme, GlobalStyle } from '@portfolio/styles';

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

export default Wrapper;
