import React, { FunctionComponent, Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Header } from '@portfolio/components/ui/Header';
import { Box } from '@portfolio/components/shared/Box';

const Container = styled(Box)`
  max-width: 800px;
`;

interface Props {
  description?: string;
  title?: string;
}

export const Page: FunctionComponent<Props> = ({
  description,
  title,
  children
}) => (
  <Fragment>
    <Head>
      <title>{title || '🤔🤔🤔🤔🤔'}</title>
      <meta
        name="description"
        content={description || "Personal showcase and blog of Paul D'Amora."}
      />
    </Head>
    <Box justify="center">
      <Container boxDirection="column" boxWidth="100%" padding="large">
        <Header />
        <Box margin={{ top: 'large' }} boxDirection="column">
          {children}
        </Box>
      </Container>
    </Box>
  </Fragment>
);
