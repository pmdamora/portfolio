import React from 'react';
import styled from 'styled-components';

import { Color, FontSize, FontWeight, Spacing } from '@portfolio/styles';
import { Box } from '@portfolio/components/ui/Box';

const Container = styled(Box)`
  background-color: ${Color.RED.withOpacity(0.9)};
  left: 0;
  top: 0;
  position: fixed;

  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: opacity 400ms cubic-bezier(0.42, 0, 0.58, 1);
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: opacity 400ms cubic-bezier(0.42, 0, 0.58, 1);
  }
`;

const MenuWrapper = styled(Box)`
  a {
    color: ${Color.WHITE};
    font-size: ${FontSize.XXLARGE};
    font-weight: ${FontWeight.BOLD};
    line-height: ${FontSize.XXLARGE};
    padding-bottom: ${Spacing.small};
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Overlay = ({ children }) => {
  return (
    <Container boxWidth="100%" boxHeight="100%" justify="center">
      <MenuWrapper boxWidth="100%" justify="center">
        {children}
      </MenuWrapper>
    </Container>
  );
};
