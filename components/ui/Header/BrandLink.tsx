import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { Color, Spacing, MQ, FontSize } from '@portfolio/styles';

// TODO: Add z-index constants and use them
const StyledAnchor = styled.a<Props>`
  text-transform: uppercase;
  color: ${Color.BLACK};
  ${props => props.isOverlay && `color: ${Color.WHITE}; z-index: 1000;`}
  &:hover {
    color: ${Color.GRAY_4};
    ${props => props.isOverlay && `color: ${Color.WHITE}; opacity: 0.7;`}
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

interface Props {
  isOverlay: boolean;
}

const BrandLink: FunctionComponent<Props> = ({ isOverlay }) => {
  return (
    <Link href="/" passHref>
      <StyledAnchor isOverlay={isOverlay}>
        <StyledHeading>Paul D&apos;Amora</StyledHeading>
      </StyledAnchor>
    </Link>
  );
};

export { BrandLink };
