import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@portfolio/styles';

const Wrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Wrapper;
