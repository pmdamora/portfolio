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

// eslint-disable-next-line import/no-default-export
export default Wrapper;
