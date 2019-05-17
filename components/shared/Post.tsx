import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/tag';

import { Page } from '@portfolio/components/shared/Page';
import { Box } from '@portfolio/components/shared/Box';

const DateHeading = styled.h4`
  font-weight: normal;
  margin: 0;
`;

export interface Props {
  title: string;
  publishDate: string;
  link: string;
}

export const Post = ({ title, publishDate }: Props) => ({ children }) => (
  <Page title={title}>
    <Box boxWidth="80%" boxDirection="column" margin="0 auto">
      <Box textAlign="center" boxDirection="column">
        <h2>{title}</h2>
        <DateHeading>{publishDate}</DateHeading>
      </Box>
      <MDXProvider components={{}}>
        <main>{children}</main>
      </MDXProvider>
    </Box>
  </Page>
);
