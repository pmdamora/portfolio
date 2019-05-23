import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import { MQ } from '@portfolio/styles';
import { Box } from '@portfolio/components/shared/Box';
import { HorizontalNav, OverlayNav } from '@portfolio/components/ui/Header/Nav';
import { Hamburger, BrandLink } from '@portfolio/components/ui/Header';

const Wrapper = styled(Box)`
  ${MQ.small} {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

interface State {
  showMobileMenu: boolean;
}

class Header extends Component<{}, State> {
  state: State = {
    showMobileMenu: false
  };

  handleHamburgerClick = () => {
    this.setState(s => ({ showMobileMenu: !s.showMobileMenu }));
  };

  render() {
    const { showMobileMenu } = this.state;
    return (
      <Fragment>
        <Wrapper boxDirection="column" textAlign="center">
          <BrandLink isOverlay={showMobileMenu} />
          <HorizontalNav />
          <Hamburger
            isOpen={showMobileMenu}
            handleHamburgerClick={this.handleHamburgerClick}
          />
        </Wrapper>
        <OverlayNav showMobileMenu={showMobileMenu} />
      </Fragment>
    );
  }
}

export { Header };
