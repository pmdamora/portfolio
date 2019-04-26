import React, { Fragment } from 'react';

import { GlobalStyle } from '@portfolio/styles';

const Wrapper = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  );
};

export default Wrapper;
