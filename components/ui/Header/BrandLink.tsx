import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Color, Spacing, MQ, FontSize } from '@portfolio/styles';

const StyledAnchor = styled.a`
  text-transform: uppercase;
  color: ${Color.BLACK};
  &:hover {
    color: ${Color.GRAY_4};
  }
`;

const StyledHeading = styled.h1`
  margin-bottom: ${Spacing.xsmall};

  ${MQ.small} {
    font-size: ${FontSize.XLARGE};
    margin: ${Spacing.medium} 0;
    text-align: left;
  }
`;

const BrandLink: FunctionComponent<{}> = () => {
  return (
    <Link href="/" passHref>
      <StyledAnchor>
        <StyledHeading>Paul D'Amora</StyledHeading>
      </StyledAnchor>
    </Link>
  );
};

export { BrandLink };