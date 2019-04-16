import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';
import { Box } from '@portfolio/components/Box';
import { theme } from '@portfolio/styles';

const BaseLayout: FunctionComponent<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box>{children}</Box>
    </ThemeProvider>
  );
};

export { BaseLayout };
