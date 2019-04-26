import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Color, Spacing } from '@portfolio/styles';

const StyledAnchor = styled.a`
  text-transform: uppercase;
  color: ${Color.BLACK};
  &:hover {
    color: ${Color.GRAY_4};
  }
`;

const StyledHeading = styled.h1`
  margin-bottom: ${Spacing.xsmall};
`;

const BrandLink: FunctionComponent<{}> = () => {
  return (
    <Link href="/">
      <StyledAnchor>
        <StyledHeading>Paul D'Amora</StyledHeading>
      </StyledAnchor>
    </Link>
  );
};

export default BrandLink;
