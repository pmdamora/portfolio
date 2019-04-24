import React, { Fragment, FunctionComponent } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { ThemeProvider } from '@portfolio/styles/styled-components';
import { theme, GlobalStyle } from '@portfolio/styles';

import { Header } from '@portfolio/components/shared/Header';
import { Box } from '@portfolio/components/ui/Box';

const Container = styled(Box)`
  max-width: 800px;
`;

const BaseLayout: FunctionComponent<{}> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head>
          <title>🤔🤔🤔🤔🤔</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <GlobalStyle />
        <Box justify="center">
          <Container boxDirection="column" boxWidth="100%" padding="medium">
            <Header />
            <Box margin={{ top: 'large' }}>{children}</Box>
          </Container>
        </Box>
      </Fragment>
    </ThemeProvider>
  );
};

export { BaseLayout };
