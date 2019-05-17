import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Box } from '@portfolio/components/shared/Box';
import { Spacing, FontWeight } from '@portfolio/styles';

const LowMarginHeading = styled.h5`
  margin: ${Spacing.small} 0;
`;

const DateHeading = styled(LowMarginHeading)`
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
    <Box justify="between" boxWidth="50%" margin="auto">
      <DateHeading>{publishDate}</DateHeading>
      <Link href={link} prefetch={prefetch}>
        <a>
          <LowMarginHeading>{title}</LowMarginHeading>
        </a>
      </Link>
    </Box>
  </Box>
);
