import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  &:hover {
    color: ${props => props.theme.colors.gray4};
  }
`;

const BrandLink: FunctionComponent<{}> = () => {
  return (
    <StyledLink href="#">
      <h1>Paul D'Amora</h1>
    </StyledLink>
  );
};

export default BrandLink;
