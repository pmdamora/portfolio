import React, { FunctionComponent, Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Header } from '@portfolio/components/ui/Header';
import { Footer } from '@portfolio/components/ui/Footer';

import { Box } from '@portfolio/components/shared/Box';
import { Spacing, Color } from '@portfolio/styles';

const Container = styled(Box)`
  max-width: 800px;
`;

const StyledParagraph = styled.p`
  border-bottom: 1px solid ${Color.GRAY_1};
  font-size: 21px;
  line-height: 30px;
  padding-bottom: ${Spacing.xlarge};
`;

interface Props {
  backgroundImageSrc?: string;
  description?: string;
  showHeading?: boolean;
  title?: string;
}

export const Page: FunctionComponent<Props> = ({
  backgroundImageSrc,
  children,
  description,
  showHeading = false,
  title
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
          {showHeading && title && (
            <Box textAlign="center" boxDirection="column">
              <h1>{title}</h1>
            </Box>
          )}
          {showHeading && description && (
            <Box>
              <StyledParagraph>{description}</StyledParagraph>
            </Box>
          )}
          <Box boxDirection="column">{children}</Box>
        </Box>
        <Footer withHr={!backgroundImageSrc} />
      </Container>
    </Box>
  </Fragment>
);
