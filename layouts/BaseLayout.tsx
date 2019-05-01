import React, { Fragment, FunctionComponent } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { GlobalStyle } from '@portfolio/styles';

import { Fonts } from '@portfolio/components/shared/Fonts';
import { Header } from '@portfolio/components/shared/Header';
import { Box } from '@portfolio/components/ui/Box';

const Container = styled(Box)`
  max-width: 800px;
`;

const BaseLayout: FunctionComponent<{}> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>🤔🤔🤔🤔🤔</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <Fonts />
      </Head>
      <GlobalStyle />
      <Box justify="center">
        <Container boxDirection="column" boxWidth="100%" padding="medium">
          <Header />
          <Box margin={{ top: 'large' }}>{children}</Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export { BaseLayout };
