import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { Color, FontSize, FontWeight, Spacing, MQ } from '@portfolio/styles';
import { Box } from '@portfolio/components/ui/Box';
import { Menu } from '@portfolio/components/shared/Header/Nav';

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

  ${MQ.small} {
    display: none;
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

export const Overlay = () => {
  return (
    <CSSTransition
      // in={this.state.overlayVisible}
      timeout={400}
      classNames="fade"
      unmountOnExit
    >
      <Container boxWidth="100%" boxHeight="100%" justify="center">
        <MenuWrapper boxWidth="100%" justify="center">
          <Menu menuDirection="column" showHome />
        </MenuWrapper>
      </Container>
    </CSSTransition>
  );
};
