import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { FontFamily, FontSize, Spacing } from '@portfolio/styles';

const StyledAnchor = styled.a`
  font-family: ${FontFamily.HEADING};
  font-size: ${FontSize.XSMALL};
  padding: 0 ${Spacing.medium};
  text-transform: uppercase;
`;

export const NavItem = ({ href, children, ...other }) => {
  return (
    <Link href={href}>
      <StyledAnchor {...other}>{children}</StyledAnchor>
    </Link>
  );
};
