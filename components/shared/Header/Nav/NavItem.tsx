import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledAnchor = styled.a`
  font-family: ${props => props.theme.fontFamilies.heading};
  font-size: ${props => props.theme.fontSizes.small};
  padding: 0 ${props => props.theme.spacing.medium};
  text-transform: uppercase;
`;

export const NavItem = ({ href, children, ...other }) => {
  return (
    <Link href={href}>
      <StyledAnchor {...other}>{children}</StyledAnchor>
    </Link>
  );
};
