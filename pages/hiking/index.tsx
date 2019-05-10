import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Page } from '@portfolio/components/shared/Page';
import { Box } from '@portfolio/components/shared/Box';
import { Spacing, Color } from '@portfolio/styles';

const StyledParagraph = styled.p`
  font-size: 21px;
  line-height: 30px;
  border-bottom: 1px solid ${Color.GRAY_1};
  padding-bottom: ${Spacing.xlarge};
`;

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    padding: ${Spacing.small} 0;
  }
`;

const HikingPage: FunctionComponent<{}> = () => {
  return (
    <Page>
      <h1>Hiking</h1>
      <Box>
        <StyledParagraph>
          All of my major hiking (and related) trips are listed below in reverse
          chronological order. Click through to view my trail journal and/or
          more details about the trip.
        </StyledParagraph>
      </Box>
      <Box>
        <StyledList>
          <li>
            <Link href="/trips/collegiate-loop/">
              <a>
                <strong>Collegiate Loop (~200 mi) - September 201</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/trips/the-long-trail/">
              <a>
                <strong>The Long Trail (273 mi) - July 2016</strong>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/hiking/highpointing/">
              <a>
                <strong>US State Highpointing</strong>
              </a>
            </Link>
          </li>
        </StyledList>
      </Box>
    </Page>
  );
};

export default HikingPage;
