import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Box } from '@portfolio/components/shared/Box';
import { Spacing, FontWeight } from '@portfolio/styles';

const DateHeading = styled.h5`
  margin-right: ${Spacing.medium};
  font-weight: ${FontWeight.NORMAL};
`;

interface Props {
  title: string;
  publishDate: string;
  link: string;
  prefetch: boolean;
}

export const Preview = ({ title, publishDate, link, prefetch }: Props) => (
  <Box boxDirection="column">
    <Box>
      <DateHeading>{publishDate}</DateHeading>
      <Link href={link} prefetch={prefetch}>
        <a>
          <h5>{title}</h5>
        </a>
      </Link>
    </Box>
  </Box>
);
