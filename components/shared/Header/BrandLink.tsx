import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledAnchor = styled.a`
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  &:hover {
    color: ${props => props.theme.colors.gray4};
  }
`;

const StyledHeading = styled.h1`
  margin-bottom: ${props => props.theme.spacing.xsmall};
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
