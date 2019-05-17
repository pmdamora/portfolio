import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Page } from '@portfolio/components/shared/Page';
import { Spacing } from '@portfolio/styles';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  li {
    padding: ${Spacing.small} 0;
  }
`;

const HikingPage: FunctionComponent<{}> = () => {
  const title = 'Hiking';
  const description =
    'All of my major hiking (and related) trips are listed below in reverse chronological order. Click through to view my trail journal and/or more details about the trip.';

  return (
    <Page title={title} description={description} showHeading>
      <StyledList>
        <li>
          <Link href="/trips/collegiate-loop/" prefetch>
            <a>
              <strong>Collegiate Loop (~200 mi) - September 2017</strong>
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
    </Page>
  );
};

export default HikingPage;
