import React, { Fragment, FunctionComponent } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { ThemeProvider } from '@portfolio/styles/styled-components';
import { Nav } from '@portfolio/layouts/components/Nav/Nav';
import { theme, GlobalStyle } from '@portfolio/styles';
import { Box } from '@portfolio/components/Box';

const GOOGLE_FONTS_API =
  'https://fonts.googleapis.com/css?family=Quattrocento+Sans:400,400i,700|Quattrocento:400,700';

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
          <link href={GOOGLE_FONTS_API} rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Box justify="center">
          <Container boxDirection="column" boxWidth="100%" padding="medium">
            <Nav />
            <Box margin={{ top: 'large' }}>{children}</Box>
          </Container>
        </Box>
      </Fragment>
    </ThemeProvider>
  );
};

export { BaseLayout };
