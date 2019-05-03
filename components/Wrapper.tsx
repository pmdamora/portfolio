import React, { Fragment } from 'react';
import { BreakpointProvider } from 'react-socks';

import { GlobalStyle } from '@portfolio/styles';

const Wrapper = ({ children }) => {
  return (
    <BreakpointProvider>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </BreakpointProvider>
  );
};

export default Wrapper;
